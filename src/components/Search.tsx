import { Search as SearchIcon } from "lucide-react";

interface Props {
  searchItems: (search: string) => void
  search: string
}

export const Search = ({ searchItems, search }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchItems(event.target.value)
  }

  return (
    <div className="flex items-center border border-zinc-500 rounded-xl px-3 py-2 mb-4 w-full max-w-xl bg-white">
      <SearchIcon className="w-6 h-6 text-zinc-600 mr-2" />
      <input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Buscar"
        className="outline-none border-none bg-transparent text-zinc-800 w-full"
      />
    </div>
  )
}
