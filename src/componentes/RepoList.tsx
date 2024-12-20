import { Star } from 'lucide-react'
import { Repo } from '../@types'

type Props = {
  repos: Repo[]
  onLoading: boolean
}

export const RepoList = ({ repos = [], onLoading }: Props) => {
  return (
    <div className="mt-10 p-4 flex flex-col gap-4">
      {Boolean(repos.length) && <h3>Top 5 repositories</h3>}
      {onLoading && repos.length === 0 && <h3>Buscando repositórios...</h3>}

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
  )
}
