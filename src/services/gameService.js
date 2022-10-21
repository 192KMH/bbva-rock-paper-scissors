import { OPTIONS } from "../constants/constants"

export function computerChoice() {
  return OPTIONS[Math.floor(Math.random() * OPTIONS.length)]
}
