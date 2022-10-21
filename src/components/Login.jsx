import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { checkUser } from "../services/userService.js"

const Login = () => {
  const [user, setUser] = useState("")
  const [userValidation, setUserValidation] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (userValidation.length > 0) {
      navigate("/game", { state: { id: userValidation } })
    }
  }, [userValidation])

  const handleSubmit = (event) => {
    event.preventDefault()
    setUserValidation(checkUser(user))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Crea tu usuario"
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <button type="submit" value="Submit">
        Jugar
      </button>
    </form>
  )
}

export default Login
