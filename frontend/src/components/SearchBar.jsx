import { useState } from "react"

export default function SearchBar({ onSearch }) {

  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-md">

      <input
        className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search notes..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />

      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl shadow"
      >
        Search
      </button>

    </form>
  )
}