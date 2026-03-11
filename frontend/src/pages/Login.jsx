import { useState } from "react"
import API from "../api/api"
import { Link } from "react-router-dom"

export default function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const res = await API.post("/auth/login",{
      email,
      password
    })

    localStorage.setItem("token",res.data.access_token)

    window.location="/"
  }

  return (
    <div className="h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
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