// onePointer, twoPointer, threePointer functions (home and guest)
    // add to the current home-score or guest-score (1, 2 or 3)
    
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0 

function onePointerHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function twoPointerHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function threePointerHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function onePointerGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function twoPointerGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function threePointerGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}