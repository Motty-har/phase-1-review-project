const form = document.getElementById("form")

document.addEventListener("DOMContentLoaded", form.addEventListener("submit", 
    (event) => {
        event.preventDefault()
        const name = document.getElementById("name").value
        fetch(`http://localhost:3000/roster?fullName=${name}`)
        .then(resp => resp.json())
        .then(data => fetchPlayer(data))
    }
))

function fetchPlayer(data) {
    const obj = data[0]
    const name = document.getElementById("playerName")
    const number = document.getElementById("playerNumber")
    const position = document.getElementById("playerPosition")
    name.innerText = obj.fullName
    number.innerText = obj.jerseyNumber
    position.innerText = obj.position.name
}

const positionSearch = document.getElementById("positionForm")

positionSearch.addEventListener("click", 
    (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/roster")
    .then(resp => resp.json())
    .then(data => {
        data.forEach((data) => playerByPos(data))
    })
})

function playerByPos(data){
    const position = document.getElementById("position").value
    if(position === data.position.name){
        const posDiv = document.getElementById('posInfo')
        const posName = document.createElement('ul')
        const posNumber = document.createElement('ul')
        const br = document.createElement('br')
        posName.innerText = data.fullName
        posNumber.innerText = data.jerseyNumber
        posDiv.append(posName, posNumber, br)
    }
}
const header = document.getElementById('header')

header.addEventListener("mouseover", (event) => {
    event.preventDefault() 
    event.target.style.color = "white"
    setTimeout(() => {
        event.target.style.color = "";
    }, 2000);
})