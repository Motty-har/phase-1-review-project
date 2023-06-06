const form = document.getElementById("form")
document.addEventListener("DOMContentLoaded", form.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value
fetch(`http://localhost:3000/roster?fullName=${name}`)
.then(resp => resp.json()
)
.then(data => {
    const obj = data[0]
    const name = document.getElementById("playerName")
    const number = document.getElementById("playerNumber")
    const position = document.getElementById("playerPosition")
    name.innerText = obj.fullName
    number.innerText = obj.jerseyNumber
    position.innerText = obj.position.name
})
}
))
const positionSearch = document.getElementById("positionForm")
positionSearch.addEventListener("click", (event) => {
    event.preventDefault()
fetch("http://localhost:3000/roster")
.then(resp => resp.json())
.then(data => {
    const position = document.getElementById("position").value.toUpperCase
    const dataPos = data[0].position.type.toUpperCase()
    data.map()
})

})