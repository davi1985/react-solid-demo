import { Search } from 'lucide-react'
import { ChangeEvent } from 'react'

type Props = {
  userName: string
  handleChangeUserName: (ev: ChangeEvent<HTMLInputElement>) => void
  handleSearchByUserName: () => Promise<void>
}
export const Form = ({
  userName,
  handleChangeUserName,
  handleSearchByUserName,
}: Props) => (
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex items-center justify-center">
    <input
      name="email"
      type="email"
      required
      placeholder="Enter GitHub username (e.g., john_doe123)"
      autoComplete="email"
      value={userName}
      onChange={handleChangeUserName}
      className="text-sm/6 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-zinc-300 focus-within:ring-4 focus-within:ring-zinc-100 outline-none"
    />

    <button
      className="ml-4 flex justify-center rounded-md bg-zinc-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
      onClick={handleSearchByUserName}
    >
      <Search className="h-6 w-6" />
    </button>
  </div>
)
