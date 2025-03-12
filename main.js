const askButton = document.getElementById("askButton") //connects the ask button to the java script
const loginDiv = document.getElementById("loginDiv") // connects the log in div to the java script
const saveDiv = document.getElementById("saveDiv") // connect the sign in div to the java script
const menuDivButton = document.getElementById("menuDivButton")

     askButton.addEventListener("click", () => { //let the user chose if he want to log in or sign up
        loginDiv.style.visibility = "hidden"
        saveDiv.style.visibility = "visible"
     })


const returnButton = document.getElementById("returnButton") // connects the return button to java script


     returnButton.addEventListener("click", () => { //let user return to the log in div if he changes his mind
        loginDiv.style.visibility = "visible"
        saveDiv.style.visibility = "hidden"
     })


const saveButton = document.getElementById("saveButton") // connects the save button to java script


     saveButton.addEventListener("click", () => { // let user to sign up 
        let name = document.getElementById("inputName2").value //make the value of input name 2 to be name
        let password = document.getElementById("inputPassword2").value //make the value of input password2 to be password
        let saveDivTitle = document.getElementById("saveDivTitle") //connect the sign in div title to java script
        if(name == "" || password == "" ) {
            saveDivTitle.textContent = "name or password isnt valid!!!" //make the sign in title to inform user that name or password are not valid for 2 seconds if one of the inputs is = 0
            setTimeout(()=>{
                saveDivTitle.textContent = "sign up"
            }, 2000)
        }
        else{
            localStorage.setItem("name", name) //save name in local storage
            localStorage.setItem("password", password) //save password in local storage
            setTimeout( () => {
                loginDiv.style.visibility = "hidden" //make the log in div and sign up div to disapear after 1 second
                saveDiv.style.visibility = "hidden"
                menuDivButton.style.visibility = "visible"
                gameDiv.style.visibility = "visible"
                upgradeDiv.style.visibility = "visible"
            }, 1000)
            let savedName = localStorage.getItem("name")
            let savedPassword = localStorage.getItem("password")
        }
     })


const loadButton = document.getElementById("loadButton") //connects the load button to java script


     loadButton.addEventListener("click", () => { //make a function to log in to a saved account
        let name = document.getElementById("inputName").value
        let password = document.getElementById("inputPassword").value
        let loginDivTitle = document.getElementById("loginDivTitle")
        if(name == localStorage.getItem("name") && password == localStorage.getItem("password")) {
            setTimeout(() => {
                loginDiv.style.visibility = "hidden"
                menuDivButton.style.visibility = "visible"
                gameDiv.style.visibility = "visible"
                upgradeDiv.style.visibility = "visible"
                scoreAmount.textContent = localStorage.getItem("score")
            }, 1000)
        }
        else {
            loginDivTitle.textContent = "account doesnt exist"
            setTimeout(() => {
                loginDivTitle.textContent = "Welcome back"
            }, 2000)
        }
     })


const passwordButton2 = document.getElementById("passwordButton2") //connects the password button to java script
const inputPassword2 = document.getElementById("inputPassword2") //connects the input password to java script


     passwordButton2.addEventListener("click", () => { //make a function that you you see what you worte in the input password
        if(inputPassword2.type === "password") {
            inputPassword2.type = "text"
        }
        else{
            inputPassword2.type = "password"
        }
     })


const inputPassword = document.getElementById("inputPassword")
const passwordButton = document.getElementById("passwordButton")


     passwordButton.addEventListener("click", () => {
        if(inputPassword.type === "password") {
            inputPassword.type = "text"
        }
        else {
            inputPassword.type = "password"
        }
     })


const menuButton3 = document.getElementById("menuButton3")
const menuDiv = document.getElementById("menuDiv")


     menuButton3.addEventListener("click", () => {
        menuDivButton.style.visibility = "hidden"
        menuDiv.style.visibility = "visible"
     })


const exitMenu = document.getElementById("exitMenu")
const inputName2 = document.getElementById("inputName2")
const inputName = document.getElementById("inputName")


     exitMenu.addEventListener("click", () => {
        menuDivButton.style.visibility = "visible"
        menuDiv.style.visibility = "hidden"
     })


const logout = document.getElementById("logout")


     logout.addEventListener("click", () => {
        menuDiv.style.visibility = "hidden"
        menuDivButton.style.visibility = "hidden"
        loginDiv.style.visibility = "visible"
        gameDiv.style.visibility = "hidden"
        upgradeDiv.style.visibility = "hidden"
        inputPassword.value = ""
        inputName.value = ""
        inputPassword2.value = ""
        inputName2.value = ""
     })


const settingButton = document.getElementById("settingButton")
const settingDiv = document.getElementById("settingDiv")
const upgradeDiv = document.getElementById("upgradeDiv")

     settingButton.addEventListener("click", () => {
        settingDiv.style.visibility = "visible"
        menuDiv.style.visibility = "hidden"
        gameDiv.style.visibility = "hidden"
        upgradeDiv.style.visibility = "hidden"
     })


const exitSetting = document.getElementById("exitSetting")


     exitSetting.addEventListener("click", () => {
        settingDiv.style.visibility = "hidden"
        menuDiv.style.visibility = "visible"
        gameDiv.style.visibility = "visible"
        upgradeDiv.style.visibility = "visible3"
     })


const gameButton = document.getElementById("gameButton")
const gameDiv = document.getElementById("gameDiv")

     gameButton.addEventListener("click", () => {
        let scoreAmount = document.getElementById("scoreAmount")
        let currentScore = parseInt(scoreAmount.textContent)
        currentScore +=1
        scoreAmount.textContent = currentScore
        localStorage.setItem("score", scoreAmount.textContent)
     })


const smallShop = document.getElementById("smallShop")


     function smallShopf() {
        let scoreAmount = document.getElementById("scoreAmount")
        let currentScore = parseInt(scoreAmount.textContent)

        currentScore +=1
        scoreAmount.textContent = currentScore
     }


smallShop.addEventListener("click", () => {
    let smallShopAmount = document.getElementById("smallShopAmount")
    let currentSmallShopAmount = parseInt(smallShopAmount.textContent)
    let smallShopCost = document.getElementById("smallShopCost")
    let currentSmallShopCost = parseInt(smallShopCost.textContent)
    smallShopAmount.textContent = currentSmallShopAmount

    if(scoreAmount.textContent < currentSmallShopCost) {
alert("you dont have engoth money")
    }
    else{
        currentSmallShopAmount +=1
        currentSmallShopCost +=5
        smallShopCost.textContent = currentSmallShopCost
        scoreAmount.textContent -= currentSmallShopCost -=5
        smallShopAmount.textContent = currentSmallShopAmount
setInterval(() => {
    smallShopf()
}, 1000)
    }
})


const aboutButton = document.getElementById("aboutButton")
const exitAbout = document.getElementById("exitAbout")
const aboutDiv =  document.getElementById("aboutDiv")


     aboutButton.addEventListener("click", () => {
        aboutDiv.style.visibility = "visible"
        menuDiv.style.visibility = "hidden"
        gameDiv.style.visibility = "hidden"
        upgradeDiv.style.visibility = "hidden"
     })

     exitAbout.addEventListener("click", () => {
        aboutDiv.style.visibility = "hidden"
        menuDiv.style.visibility = "visible"
        gameDiv.style.visibility = "visible"
        upgradeDiv.style.visibility = "visible"
     })


const bigShop = document.getElementById("bigShop")


     function bigShopf() {
        let scoreAmount = document.getElementById("scoreAmount")
        let currentScore = parseInt(scoreAmount.textContent)
        currentScore +=5
        scoreAmount.textContent = currentScore
     }


     bigShop.addEventListener("click", () => {
        let bigShopAmount = document.getElementById("bigShopAmount")
        let currentBigShopAmount = parseInt(bigShopAmount.textContent)
        let bigShopCost = document.getElementById("bigShopCost")
        let currentBigShopCost = parseInt(bigShopCost.textContent)
        if(scoreAmount.textContent < currentBigShopCost) {
            alert("you dont have enogth money")
        }
        else{
            currentBigShopAmount +=1
            bigShopAmount.textContent = currentBigShopAmount
            currentBigShopCost +=25
            bigShopCost.textContent = currentBigShopCost
            scoreAmount.textContent -= currentBigShopCost -=25
            setInterval(() => {
                bigShopf()
            }, 1000)
        }
     })

const smallBank = document.getElementById("smallBank")


     function smallBankf() {
        let scoreAmount = document.getElementById("scoreAmount")
        let currentScore = parseInt(scoreAmount.textContent)
        currentScore +=25
        scoreAmount.textContent = currentScore
     }


     smallBank.addEventListener("click", () => {
        let smallBankAmount = document.getElementById("smallBankAmount")
        let smallBankCost = document.getElementById("smallBankCost")
        let currentSmallBankAmount = parseInt(smallBankAmount.textContent)
        let CorrentSmallBankCost = parseInt(smallBankCost.textContent)
        if(scoreAmount.textContent < CorrentSmallBankCost) {
            alert("you dont have enoth money")
        }
        else {
            CorrentSmallBankCost +=100
            smallBankCost.textContent = CorrentSmallBankCost
            currentSmallBankAmount +=1
            smallBankAmount.textContent = currentSmallBankAmount
            scoreAmount.textContent -= CorrentSmallBankCost -=100
            setInterval(() => {
                smallBankf()
            }, 1000)
        }
        if(smallBankAmount.textContent == 1) {
            alert("you made some good proggretion you should save it in the menu")
        }
     })