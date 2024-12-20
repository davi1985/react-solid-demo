import { Loader, Star } from 'lucide-react'
import { Repo } from '../@types'

type Props = {
  repos: Repo[]
  onLoading: boolean
}
export const RepoList = ({ onLoading, repos }: Props) => (
  <div className="mt-10 p-4 flex flex-col gap-4 max-w-md m-auto">
    {Boolean(repos.length) && <h3>Top 5 repositories:</h3>}

    {onLoading && repos.length === 0 && (
      <span className="flex items-center gap-2 justify-center py-4">
        Buscando repositórios <Loader className="h-4 w-4 animate-spin" />
      </span>
    )}

    {repos.map(({ name, stars, language }) => (
      <div
        className="flex p-4 bg-zinc-50 rounded-md justify-between hover:bg-zinc-100 shadow-md"
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
