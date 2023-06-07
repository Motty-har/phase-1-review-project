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
    const position = document.getElementById("position").value
    /*need to iterate through the data which is an array of objects 
    in each itteration compare the position.name to the positon input by user 
    return whole obj if comparison = true 
    continues to itrerate throug whole array returning all the matches
    */
   //console.log(position === data[0].position.name)
   for(let i = 0; i < data.length; i++){
    if(position === data[i].position.name){
        const posDiv = document.getElementById('posInfo')
        const posName = document.createElement('ul')
        const posNumber = document.createElement('ul')
        posName.innerText = data[i].fullName
        posNumber.innerText = data[i].jerseyNumber
        posDiv.append(posName, posNumber)
    }else{

    }
 }
})

})