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
      className="bg-white shadow-md p-4 flex justify-between"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >

      <h1
        className="text-xl font-bold text-indigo-600 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        AI Notes
      </h1>

      {token ? (
        <button
          onClick={logout}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={goLogin}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Login
        </button>
      )}

    </motion.div>
  )
}