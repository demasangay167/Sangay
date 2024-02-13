const rl = require('readline-sync')
const fs = require('node:fs')     
const pwd = Number(rl.question("set a four digit password"))  
if(isNaN(pwd) &&pwd.length !== 4){
    console.log("please enter a valid passcode") 
}else{
  fs.writeFileSync("./pwd.txt",""+pwd)
}










