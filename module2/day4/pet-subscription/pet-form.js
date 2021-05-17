var nameInout = document.getElementById("name")
var emailInput = document.getElementById("email")
var addressInput = document.getElementById("address")
var addPerButton = document.getElementById("addPet")
var submitButton = document.getElementById("submit")

//if someone types in the name input, console log what they type
function nameInputHandler(event){
    console.log(event.target.value)
}
nameInputHandler.addEventListener('')