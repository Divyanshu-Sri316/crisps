import { useState } from "react"
import { Link } from "react-router-dom"
import API from "../api/api"
import toast from "react-hot-toast"

export default function Register() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    setError("")

    try{

      await API.post("/auth/register",{
        email,
        password
      })

      toast.success("Account created successfully!")

      setTimeout(()=>{
        window.location="/login"
      },1500)

    }catch(err){

      const message = err.response?.data?.detail || "Registration failed"

      toast.error(`Error: ${message}`)

      setError(message)

    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 to-purple-200">

      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96 space-y-4"
      >

        <h2 className="text-2xl font-bold text-center">
          Create Account
        </h2>

        <input
          className="border p-2 w-full rounded"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded transition"
          disabled={loading}
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link className="text-indigo-600" to="/login">
            Login
          </Link>
        </p>

      </form>

    </div>
  )
}