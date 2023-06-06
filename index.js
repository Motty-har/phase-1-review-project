const form = document.getElementById("get")
document.addEventListener("DOMContentLoaded", form.addEventListener("click", (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value
    console.log(name)
fetch(`http://localhost:3000/roster/}`)
.then(resp => resp.json()
)
.then(obj => console.log(obj))
}
))