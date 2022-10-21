import { render, screen } from "@testing-library/react"
import Login from "./Login"
import { BrowserRouter as Router } from "react-router-dom"

describe("Login", () => {
  it("It should render login component", () => {
    render(
      <Router>
        <Login />
      </Router>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("Input must not be null", () => {
    render(
      <Router>
        <Login />
      </Router>
    )
    const inputElement = screen.getByRole("textbox")
    expect(inputElement.required).toBeTruthy()
  })
})
