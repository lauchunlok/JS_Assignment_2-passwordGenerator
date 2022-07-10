let AllChars = []
let displayPassword1 = document.getElementById("displayPassword1")
let displayPassword2 = document.getElementById("displayPassword2")
let displayPassword3 = document.getElementById("displayPassword3")
let displayPassword4 = document.getElementById("displayPassword4")

for (let i = 32; i < 127; i++) {
  AllChars.push(String.fromCharCode(i))
}

function generatePassword() {
    var passwordLength = document.getElementById("length").value

    let allCharcterLength = AllChars.length
    let firstPassword = ""
    let secondPassword = ""
    let thirdPassword = ""
    let fourthPassword = ""
    
    for (let j = 0; j < passwordLength; j++) {
        firstPassword += AllChars[Math.floor(Math.random() * allCharcterLength)]
        secondPassword += AllChars[Math.floor(Math.random() * allCharcterLength)]
        thirdPassword += AllChars[Math.floor(Math.random() * allCharcterLength)]
        fourthPassword += AllChars[Math.floor(Math.random() * allCharcterLength)]
    }
    
    // console.log(firstPassword)
    // console.log(secondPassword)
    // console.log(thirdPassword)
    // console.log(fourthPassword)
    
    displayPassword1.textContent = firstPassword
    displayPassword2.textContent = secondPassword
    displayPassword3.textContent = thirdPassword
    displayPassword4.textContent = fourthPassword
}

