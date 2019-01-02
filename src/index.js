// document.querySelector('body').innerHTML += `
//   <p>Hello World!</p>
// `

const SERVER_URL = `http://localhost:3000`

document.addEventListener("DOMContentLoaded", initPage)

function initPage() {
  fetchDestinations()
}

function fetchDestinations() {
  // define function here
  return fetch(`${SERVER_URL}/destinations`)
    .then(function(res) {
      return res.json()
    })
    .then(function(destinations) {
      destinations.forEach(renderDestinations)
      const paragraphDestinations = document.querySelectorAll('p')
      paragraphDestinations.forEach(console.log)
    })
}

function renderDestinations(destination) {
  const body = document.querySelector('body')
  const { name } = destination
  body.innerHTML += `
    <p>${name}</p>
  `
}

function showDrivers(destination) {
  // destination
}