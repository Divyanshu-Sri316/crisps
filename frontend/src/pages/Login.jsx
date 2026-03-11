import { useState } from "react"
import API from "../api/api"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"

export default function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e)=>{
  e.preventDefault()

  try {

    const res = await API.post("/auth/login",{
      email,
      password
    })

    localStorage.setItem("token",res.data.access_token)

    toast.success("Login successful!")

    setTimeout(()=>{
      window.location="/"
    },1000)

  } catch(err){

    toast.error("Invalid email or password")
    }
  }

  return (
<div className="h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-xl w-96"
      >

        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-4"
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="bg-indigo-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

        <p className="text-sm text-center mt-3">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-600">
            Register
        </Link>
        </p>

      </form>

    </div>
  )
}