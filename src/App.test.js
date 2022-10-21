import { render, screen } from "@testing-library/react"
import Login from "./components/Login"
import { BrowserRouter as Router } from "react-router-dom"

describe("Login", () => {
  it("Renderiza el formulario correctamente", () => {
    render(
      <Router>
        <Login />
      </Router>
    )
    expect(screen.getByPlaceholderText(/usuario/i)).toBeInTheDocument()
  })
})
