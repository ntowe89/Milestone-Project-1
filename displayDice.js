let oneArray = []
let twoArray = []
let threeArray = []
let fourArray = []
let fiveArray = []
let sixArray = []


function displayDice(array){
    let rolledDiv = document.getElementById("rolledDiv")
    let keptDiv = document.getElementById("keptDiv")

    rolledDiv.innerHTML = ""

    for(let i = 0; i < array.length; i++){
        if(array[i] === 1){
            let diceOne = document.createElement('img')
            diceOne.src = "assets/dice_1.png"
            diceOne.setAttribute('id', 'diceFace')
            diceOne.setAttribute('class', 'diceOne')
            rolledDiv.append(diceOne)
            let clicksOne = 0
            diceOne.addEventListener('click', myFunction => {
                
                if(clicksOne === 0){
                    keptDiv.append(diceOne)
                    oneArray.push(array[i])
                    clicksOne++
                }
                else{
                    rolledDiv.append(diceOne)
                    oneArray.pop()
                    clicksOne--
                }
            })
        }


        if(array[i] === 2){
            let diceTwo = document.createElement('img')
            diceTwo.src = "assets/dice_2.png"
            diceTwo.setAttribute('id', 'diceFace')
            rolledDiv.append(diceTwo)
            let clicksTwo = 0
            diceTwo.addEventListener('click', myFunction => {
                
                if(clicksTwo === 0){
                    keptDiv.append(diceTwo)
                    twoArray.push(array[i])
                    clicksTwo++
                }
                else{
                    rolledDiv.append(diceTwo)
                    twoArray.pop()
                    clicksTwo--
                }
            })
        }
        if(array[i] === 3){
            let diceThree = document.createElement('img')
            diceThree.src = "assets/dice_3.png"
            diceThree.setAttribute('id', 'diceFace')
            rolledDiv.append(diceThree)
            let clicksThree = 0
            diceThree.addEventListener('click', myFunction => {
                
                if(clicksThree === 0){
                    keptDiv.append(diceThree)
                    threeArray.push(array[i])
                    clicksThree++
                }
                else{
                    rolledDiv.append(diceThree)
                    threeArray.pop()
                    clicksThree--
                } 
            })
        }
        if(array[i] === 4){
            let diceFour = document.createElement('img')
            diceFour.src = "assets/dice_4.png"
            diceFour.setAttribute('id', 'diceFace')
            rolledDiv.append(diceFour)
            let clicksFour = 0
            diceFour.addEventListener('click', myFunction => {
                
                if(clicksFour === 0){
                    keptDiv.append(diceFour)
                    fourArray.push(array[i])
                    clicksFour++
                }
                else{
                    rolledDiv.append(diceFour)
                    fourArray.pop()
                    clicksFour--
                    
                }
            })
        }


        if(array[i] === 5){
            let diceFive = document.createElement('img')
            diceFive.src = "assets/dice_5.png"
            diceFive.setAttribute('id', 'diceFace')
            rolledDiv.append(diceFive)
            let clicksFive = 0
            diceFive.addEventListener('click', myFunction => {
                
                if(clicksFive === 0){
                    keptDiv.append(diceFive)
                    fiveArray.push(array[i])
                    clicksFive++
                }
                else{
                    rolledDiv.append(diceFive)
                    fiveArray.pop()
                    clicksFive--
                }
            })
        }


        if(array[i] === 6){
            let diceSix = document.createElement('img')
            diceSix.src = "assets/dice_6.png"
            diceSix.setAttribute('id', 'diceFace')
            rolledDiv.append(diceSix)
            let clicksSix = 0
            diceSix.addEventListener('click', myFunction => {
                
                if(clicksSix === 0){
                    keptDiv.append(diceSix)
                    sixArray.push(array[i])
                    clicksSix++
                }
                else{
                    rolledDiv.append(diceSix)
                    sixArray.pop()
                    clicksSix--
                }
            })
        }
    }
}