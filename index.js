const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passWord1 = document.getElementById ("passwordone")
let passWord2 = document.getElementById ("passwordtwo")
let passwordButton = document.getElementById ("passwords")
let passwordLimit = 15

passwordButton.addEventListener ("click", function (){
    passWord1.textContent = 0
    passWord2.textContent = 0
    for(let i = 0; i < passwordLimit; i++){
    let getRandomalphabets1 = Math.floor(Math.random()*characters.length) 
   let getRandomalphabets2 = Math.floor(Math.random()*characters.length)
   passWord1.textContent += characters[getRandomalphabets1]
   passWord2.textContent += characters[getRandomalphabets2]    
    }
   
})


