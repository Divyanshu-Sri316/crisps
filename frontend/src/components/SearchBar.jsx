import { useState } from "react"

export default function SearchBar({ onSearch }) {

  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">

      <input
        className="border rounded p-2 flex-1"
        placeholder="Search notes..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />

      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

    </form>
  )
}