var rl = require('readline-sync');

var happy = rl.question("give me a number")
var sad = rl.question("give me a different number")

console.log(Number(happy)+Number(sad))
