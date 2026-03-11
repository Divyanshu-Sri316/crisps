import API from "../api/api"
import toast from "react-hot-toast"

export default function NoteCard({ note, refreshNotes }) {

  const deleteNote = async () => {
    await API.delete(`/notes/${note.id}`)
    refreshNotes()
    toast.success("Note deleted")
  }

  return (
    <div className="bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col justify-between">

      <div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {note.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {note.content}
        </p>

      </div>

      <button
        onClick={deleteNote}
        className="mt-4 text-red-500 hover:text-red-700 text-sm font-medium self-end"
      >
        Delete
      </button>

    </div>
  )
}