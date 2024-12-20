import axios from 'axios'
import { Loader, Search, Star } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

export type Repo = {
  name: string
  stars: number
  language: string
}

export type RepoResponse = {
  name: string
  stargazers_count: number
  language: string
}[]

export const App = () => {
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

      const data = await axios.get<RepoResponse>(
        `https://api.github.com/users/${userName}/repos?per_page=200&page=1`
      )

      const sortedRepos = data.data.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      )

      const repos = sortedRepos
        .slice(0, 5)
        .map(({ name, language, stargazers_count }) => ({
          name,
          language,
          stars: stargazers_count,
        }))

      setRepos(repos)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-1 items-center justify-center flex-col mt-10">
        <svg
          height="32"
          aria-hidden="true"
          viewBox="0 0 24 24"
          version="1.1"
          width="32"
          data-view-component="true"
        >
          <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
        </svg>

        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
          Top repos by username
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex items-center justify-center">
        <input
          name="email"
          type="email"
          required
          placeholder="john_doe123"
          autoComplete="email"
          value={userName}
          onChange={handleChangeUserName}
          className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />

        <button
          className="ml-4 flex justify-center rounded-md bg-zinc-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
          onClick={handleSearchByUserName}
        >
          <Search className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-10 p-4 flex flex-col gap-4">
        {Boolean(repos.length) && <h3>Top 5 repositories</h3>}

        {loading && repos.length === 0 && (
          <span className="flex items-center gap-2 justify-center py-4">
            Buscando repositórios <Loader className="h-4 w-4 animate-spin" />
          </span>
        )}

        {repos.map(({ name, stars, language }) => (
          <div
            className="flex p-4 bg-zinc-100 rounded-md justify-between hover:bg-zinc-200"
            key={name}
          >
            <span>
              {name} - {language ?? ''}
            </span>

            <div className="flex gap-2">
              <Star className="h4 w-4" />
              <span>{stars}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
