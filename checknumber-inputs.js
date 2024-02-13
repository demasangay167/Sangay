     
var rl = require('readline-sync');

const reply = rl.question("please enter something : ")

console.log("replyis "+ reply)

var numberornot = Number(reply)
console.log(numberornot)

if(isNaN(numberornot)) {
    console.log("Sorry, your input was not a number.")
} else {
    console.log("your input was a number")
}
