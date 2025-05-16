let homeCount = 0
let guestCount = 0

let homeEl = document.getElementById("home-number")
let guestEl = document.getElementById("guest-number")


function onePointHome() {
    homeEl.textContent =  homeCount += 1
}

function onePointGuest() {
    guestEl.textContent =  guestCount += 1
}

function twoPointHome() {
    homeEl.textContent =  homeCount += 2
}

function twoPointGuest() {
    guestEl.textContent =  guestCount += 2
}

function threePointHome() {
    homeEl.textContent =  homeCount += 3
}

function threePointGuest() {
    guestEl.textContent =  guestCount += 3
}

function newGame() {
    homeEl.textContent = 0
    homeCount = 0
    guestEl.textContent = 0
    guestCount = 0
}