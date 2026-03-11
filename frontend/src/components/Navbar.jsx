import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Navbar() {

  const navigate = useNavigate()
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    window.location.href = "/"
  }

  const goLogin = () => {
    navigate("/login")
  }

  return (
    <motion.div
      className="backdrop-blur-md bg-white/70 border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >

      <h1
        className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        AI Notes
      </h1>

      {token ? (
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow transition"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={goLogin}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
        >
          Login
        </button>
      )}

    </motion.div>
  )
}