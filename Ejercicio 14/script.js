const cleanRoom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({done: true })
  }, 3000)
})

const doHomework = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({done: true })
  }, 4000)
})

const goToAParty = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ error: "DO NOT GO OUTSIDE" })
  }, 6000)
})

const doThing = () => {
  cleanRoom
    .then(IsClean => {
      IsClean ? console.log("Is the room clean? YAS") : console.log("Is the room clean? NOPE")
      return doHomework
    })
    .then(IsDone => {
      IsDone ? console.log("Is the homework done?? YAS") : console.log("Is the homework done? NOPE")
      return goToAParty
    })
    .catch(error => console.error(error))
    .finally(() => console.log("Stay home<3"))
}

doThing()


