var addPetButton = document.getElementById("addPet")
console.log(addPetButton)

// functions!
function sayHello() {
    console.log("hi")
    return "hi"
}

console.log(sayHello)

function makeGreetingMessage(name){
    var baseMessage = "Well hello there "
    var fullMessage = baseMessage + name
    return fullMessage
}

var greetingForMe = = makeGreetingMessage("Han")
greetingForMe = makeGreetingMessage()
console.log(greetingForMe)

function makeGreetingMessage(name,age){
    var baseMessage = "Well hello there "
    var fullMessage = baseMessage + name + ". You are" + age + "years old."
    return fullMessage
}

var greetingForMe = = makeGreetingMessage("Han",25)
console.log(greetingForMe)