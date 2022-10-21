import { useLocation, useNavigate } from "react-router-dom"
import { getScore, saveScore } from "../services/userService"
import { useState, useEffect } from "react"
import { computerChoice } from "../services/gameService"
import { OPTIONS } from "../constants/constants"
import logout from "../sign-out.png"

const Game = () => {
  const { state } = useLocation()
  //if (state === null) return //failsafe, redirect to login
  const { id } = state
  const navigate = useNavigate()
  const user = id
  const [pts, setPts] = useState(getScore(user))
  const [userOption, setUserOption] = useState()
  const [cpuOption, setCpuOption] = useState()
  const [disable, setDisable] = useState(false)
  const [fakeThink, setFakeThink] = useState(false)

  useEffect(() => {
    getScore(user)
  })

  useEffect(() => {
    setCpuOption(computerChoice())
  }, [pts])

  const navigation = (dest) => {
    saveScore(user, pts)
    if (dest === "logout") {
      navigate("/")
    } else {
      navigate("/ranking")
    }
  }

  const gameStart = (userChoice) => {
    setTimeout(() => {
      setFakeThink(true)
    }, "1000")
    setTimeout(() => {
      setDisable(false)
      if (cpuOption.weak === userChoice) {
        setPts(pts + 1)
      } else {
        setCpuOption(computerChoice())
      }
    }, "2000")
  }

  return (
    <>
      <div className="header">
        <div className="headerWrap">
          <div className="user">Hola {user}</div>
          <img
            src={logout}
            className="logout"
            alt="logout"
            onClick={() => navigation("logout")}
          ></img>
          {/* <a onClick={() => navigation("ranking")}>Ranking</a> */}
        </div>
      </div>
      {disable && (
        <div className="result">
          {user} elige: <b>{userOption}</b> -- CPU elige:{" "}
          <b>{fakeThink ? cpuOption.name : "..."}</b>
        </div>
      )}
      <main>
        {Object.values(OPTIONS).map((opt, key) => (
          <button
            disabled={disable}
            key={key}
            className="choices"
            onClick={() => {
              gameStart(opt.opId)
              setDisable(true)
              setUserOption(opt.name)
              setFakeThink(false)
            }}
          >
            {opt.name}
          </button>
        ))}
        <div className="score">
          Tus puntos: <b>{pts}</b>
        </div>
      </main>
    </>
  )
}

export default Game
