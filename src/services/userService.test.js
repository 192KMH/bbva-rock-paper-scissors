import * as userService from "./userService"

describe("User Service", () => {
  it("it should generate a new user", () => {
    userService.newUser("testUser")
    const users = JSON.parse(localStorage.getItem("bbva-rps"))
    expect(users).toEqual([{ user: "testUser", score: 0 }])
  })

  it("it should get a score for the user", () => {
    const score = userService.getScore("testUser")
    expect(score).toEqual(0)
  })

  it("it should get a score for a non existant user", () => {
    const score = userService.getScore("nonExistant")
    expect(score).toEqual(0)
  })

  it("it should set an updated score", () => {
    userService.saveScore("testUser", 7)
    const users = JSON.parse(localStorage.getItem("bbva-rps"))
    expect(users).toEqual([{ user: "testUser", score: 7 }])
  })

  it("it should not save any score if user doesn't exist", () => {
    userService.saveScore("nonExistant", 9)
    const users = JSON.parse(localStorage.getItem("bbva-rps"))
    expect(users).toEqual([{ user: "testUser", score: 7 }])
  })

  it("it should get a score for an user with an updated score", () => {
    const score = userService.getScore("testUser")
    expect(score).toEqual(7)
  })
})
