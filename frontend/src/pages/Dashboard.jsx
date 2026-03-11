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
    <div>

      <Navbar/>

      <div className="p-8">

        <SearchBar onSearch={searchNotes}/>
        <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={()=>setShowModal(true)}
        >
        + New Note
        </button>

        <div className="grid grid-cols-3 gap-4">

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