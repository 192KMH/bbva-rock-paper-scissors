export function newUser(user) {
  let createUser = {
    user: user,
    score: 0,
  }
  let usersArr = []
  if (!localStorage.getItem("bbva-rps")) {
    usersArr.push(createUser)
    localStorage.setItem("bbva-rps", JSON.stringify(usersArr))
  } else {
    usersArr = JSON.parse(localStorage.getItem("bbva-rps"))
    usersArr.push(createUser)
    localStorage.setItem("bbva-rps", JSON.stringify(usersArr))
  }
}

export function getScore(user) {
  let usersArr = []
  usersArr = JSON.parse(localStorage.getItem("bbva-rps"))
  let foundUser = usersArr.find((item) => item.user === user)
  return foundUser.score
}

export function saveScore(user, pts) {
  let usersArr = []
  usersArr = JSON.parse(localStorage.getItem("bbva-rps"))
  let foundUser = usersArr.find((item) => item.user === user)
  foundUser.score = pts
  localStorage.setItem("bbva-rps", JSON.stringify(usersArr))
}

export function checkUser(user) {
  let userExists = false
  if (!localStorage.getItem("bbva-rps")) {
    newUser(user)
  } else {
    for (let i of JSON.parse(localStorage.getItem("bbva-rps"))) {
      if (i.user === user) {
        userExists = true
        break
      }
    }
    if (!userExists) {
      newUser(user)
    }
  }
  return user
}
