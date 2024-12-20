import { ChangeEvent, useState } from 'react'
import { Repo, RepoResponse } from './@types'
import { HttpClient, HttpMethod } from './infra/httpClient/protocols'
import { ReposMapper } from './mappers/ReposMapper'

type Props = {
  httpClient: HttpClient
}
export const useApp = ({ httpClient }: Props) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChangeUserName = (ev: ChangeEvent<HTMLInputElement>) =>
    setUserName(ev.target.value)

  const handleSearchByUserName = async () => {
    if (!userName) {
      return
    }

    try {
      setLoading(true)

      const data = await httpClient.sendRequest<RepoResponse>({
        endpoint: `https://api.github.com/users/${userName}/repos?per_page=200&page=1`,
        method: HttpMethod.GET,
      })

      const repos = ReposMapper.toDomain(data)

      setRepos(repos)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  return {
    repos,
    loading,
    userName,
    handleChangeUserName,
    handleSearchByUserName,
  }
}
