/* ===============================
EXPERIENCE AUTO UPDATE
=============================== */

const startDate = new Date("2023-06-01")  // June 2023

function updateExperience(){

const now = new Date()

let months =
(now.getFullYear() - startDate.getFullYear()) * 12 +
(now.getMonth() - startDate.getMonth())

let years = Math.floor(months / 12)
let remainingMonths = months % 12

document.getElementById("experience").innerText =
years + "." + remainingMonths

}

updateExperience()

/* ===============================
GLASS CARD 3D MOUSE EFFECT
=============================== */

const card = document.querySelector(".glass-card")

document.addEventListener("mousemove",(e)=>{

let x = (window.innerWidth / 2 - e.clientX) / 60
let y = (window.innerHeight / 2 - e.clientY) / 60

card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`

})

/* ===============================
GLASS MORPHISM MOUSE LIGHT
=============================== */

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

card.style.setProperty("--x", x + "px")
card.style.setProperty("--y", y + "px")

})

/* ===============================
SCROLL REVEAL ANIMATION
=============================== */

const reveals = document.querySelectorAll(".about-section, .skills-section, .projects-section")

function revealSections(){

reveals.forEach(section => {

const top = section.getBoundingClientRect().top
const windowHeight = window.innerHeight

if(top < windowHeight - 120){

section.style.opacity = "1"
section.style.transform = "translateY(0px)"

}

})

}

window.addEventListener("scroll", revealSections)

/* ===============================
INITIAL ANIMATION SETUP
=============================== */

reveals.forEach(section => {

section.style.opacity = "0"
section.style.transform = "translateY(80px)"
section.style.transition = "all 0.8s ease"

})

revealSections()
