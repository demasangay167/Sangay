var rl = require ("readline-sync")
function getanumberFromUser(){
    var reply = rl.question("give me a number")
    var numberOrNot = Number(reply)
    if (isNaN(numberOrNot)) {
        console.log("you messed up")
    } else {
        return numberOrNot
    }
}
var a =getanumberFromUser()
var b = getanumberFromUser()
console.log(a)
console.log(b)