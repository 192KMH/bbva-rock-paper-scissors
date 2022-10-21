const STORAGE_KEY = "bbva-rps"

export function newUser(user) {
  const createUser = {
    user: user,
    score: 0,
  }

  const users = localStorage.getItem(STORAGE_KEY)
  const usersArr = users ? JSON.parse(users) : []
  usersArr.push(createUser)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usersArr))
}

export function getScore(user) {
  const usersArr = JSON.parse(localStorage.getItem(STORAGE_KEY))
  const foundUser = usersArr.find((item) => item.user === user)
  return foundUser ? foundUser.score : 0
}

export function saveScore(user, pts) {
  const usersArr = JSON.parse(localStorage.getItem(STORAGE_KEY))
  const foundUser = usersArr.find((item) => item.user === user)
  if (foundUser) {
    foundUser.score = pts
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usersArr))
  }
}

export function checkUser(user) {
  const users = localStorage.getItem(STORAGE_KEY)
  if (!users) {
    newUser(user)
  } else {
    const usersArr = JSON.parse(users)
    const foundUser = usersArr.find((item) => item.user === user)
    if (!foundUser) {
      newUser(user)
    }
  }
  return user
}
