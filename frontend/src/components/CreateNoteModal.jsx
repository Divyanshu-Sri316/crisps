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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl">

        <h2 className="text-2xl font-bold mb-5 text-gray-800">
          Create Note
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="border w-full p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
            className="border w-full p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            rows="4"
            placeholder="Content"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />

          <div className="flex justify-end gap-3 pt-2">

            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
            >
              Create
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}