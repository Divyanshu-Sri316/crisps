import { useEffect, useState } from "react"
import API from "../api/api"
import Navbar from "../components/Navbar"
import NoteCard from "../components/NoteCard"
import SearchBar from "../components/SearchBar"
import CreateNoteModal from "../components/CreateNoteModal"

export default function Dashboard() {

  const [notes, setNotes] = useState([])
  const [showModal,setShowModal] = useState(false)

  const fetchNotes = async () => {
    const res = await API.get("/notes")
    setNotes(res.data)
  }

  const searchNotes = async (query) => {
    const res = await API.post("/search", { query })
    setNotes(res.data)
  }

  useEffect(()=>{
    fetchNotes()
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">

      <Navbar/>

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center mb-6">

          <SearchBar onSearch={searchNotes}/>

          <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl shadow-md transition transform hover:scale-105"
          onClick={()=>setShowModal(true)}
          >
          + New Note
          </button>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {notes.map(note => (
            <NoteCard
              key={note.id}
              note={note}
              refreshNotes={fetchNotes}
            />
          ))}

        </div>

      </div>

      {showModal && (
        <CreateNoteModal
            closeModal={()=>setShowModal(false)}
            refreshNotes={fetchNotes}
        />
      )}

    </div>
  )
}