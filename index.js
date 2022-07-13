let password1Field = document.querySelector("#password-1");
let password2Field = document.querySelector("#password-2");


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const randomNumber = () => {
     return Math.floor(Math.random()*characters.length)
    
}
const randomPassword = () => {
    let password = "";
    for (let i = 0; i < 15; i++) {
        password += characters[randomNumber()];
    }
    return password
}

function passwordTwo () {
    password1Field.textContent = randomPassword();
    password2Field.textContent = randomPassword();
}



