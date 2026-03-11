import API from "../api/api"

export default function NoteCard({ note, refreshNotes }) {

  const deleteNote = async () => {
    await API.delete(`/notes/${note.id}`)
    refreshNotes()
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

      <h3 className="text-lg font-bold mb-2">
        {note.title}
      </h3>

      <p className="text-gray-600 mb-3">
        {note.content}
      </p>

      <button
        onClick={deleteNote}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        Delete
      </button>

    </div>
  )
}