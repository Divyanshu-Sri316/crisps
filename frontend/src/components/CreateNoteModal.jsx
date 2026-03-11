import { useState } from "react"
import API from "../api/api"

export default function CreateNoteModal({ closeModal, refreshNotes }) {

  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    await API.post("/notes", {
      title,
      content
    })

    refreshNotes()
    closeModal()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">

        <h2 className="text-xl font-bold mb-4">Create Note</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            className="border w-full p-2 rounded"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
            className="border w-full p-2 rounded"
            placeholder="Content"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />

          <div className="flex justify-end gap-2">

            <button
              type="button"
              className="px-3 py-1 bg-gray-300 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              className="px-4 py-1 bg-indigo-600 text-white rounded"
            >
              Create
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}