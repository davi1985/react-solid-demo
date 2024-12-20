import { Search } from 'lucide-react'
import { ChangeEvent } from 'react'

type Props = {
  userName: string
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void
  onHandleSearchByUserName: () => Promise<void>
}

export const SearchReposForm = ({
  userName,
  onChange,
  onHandleSearchByUserName,
}: Props) => (
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex items-center justify-center">
    <input
      name="email"
      type="email"
      required
      placeholder="john_doe123"
      autoComplete="email"
      value={userName}
      onChange={onChange}
      className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    />

    <button
      className="ml-4 flex justify-center rounded-md bg-zinc-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
      onClick={onHandleSearchByUserName}
    >
      <Search className="h-6 w-6" />
    </button>
  </div>
)
