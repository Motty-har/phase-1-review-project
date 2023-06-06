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