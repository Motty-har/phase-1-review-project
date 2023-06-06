const form = document.getElementById("form")
document.addEventListener("DOMContentLoaded", form.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value
    console.log(name)
fetch(`http://localhost:3000/roster/${name}`)
.then(resp => resp.json()
)
.then(data => {
    const name = document.getElementById("playerName")
    const number = document.getElementById("playerNumber")
    const position = document.getElementById("playerPosition")
    name.innerText = data.fullName
    number.innerText = data.jerseyNumber
    position.innerText = data.position.name
})
}
))