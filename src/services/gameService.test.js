import * as gameService from "./gameService"
import { OPTIONS } from "../constants/constants"

describe("Game Service", () => {
  it("it should generate a computer choice", () => {
    const cpuChoice = gameService.computerChoice()
    expect(OPTIONS).toContainEqual(cpuChoice)
  })
})
