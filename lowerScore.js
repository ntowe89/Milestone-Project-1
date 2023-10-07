let numberOfYahtzees = null
let lowerTotal = null
let bestScore = 0


//DOM select for each score
let thisThreeOfAKind = document.getElementById("threeKind")
let thisFourOfAKind = document.getElementById("fourKind")
let thisFullHouse = document.getElementById("FH")
let thisSmallStraight = document.getElementById("smStraight")
let thisLargeStraight = document.getElementById("lgStraight")
let thisYahtzee = document.getElementById("recordFirstYahtzee")
let thisYahtzeeBonus = document.getElementById("bonusYahtzee")
let thisBonus = document.getElementById("bonus")
let thisChance = document.getElementById("chances")
let thisLowerTotal = document.getElementById("lowerScore")
let thisTotalScore = document.getElementById("grandTotal")
let thisBestGmae = document.getElementById("bestGame")


//3 of a kind 
let threeOfkind = null
let myThreeOfAKind = document.getElementById("threeOfAKind")
myThreeOfAKind.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(threeOfkind === null){
        if(checkIfAllDiceSelected === 5){
            if(oneArray.length >= 3 || twoArray.length >= 3 || threeArray.length >= 3 || fourArray.length >= 3 || fiveArray.length >= 3 || sixArray.length >= 3){
                thisThreeOfAKind.innerHTML= totalDice()
                threeOfkind = Number(totalDice())
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
                
            }
            else{
                thisThreeOfAKind.innerHTML= "0"
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                threeOfkind = 0
                addLower()
            }
        }
        else{
            alert("Make sure to select all five dice before adding score")
        }
    }
    else{
        alert("Three of a kind spot has already been used, please make another selection")
    }
})

//4 of a kind
let fourOfkind = null
let myFourOfAKind = document.getElementById("fourOfAKind")
myFourOfAKind.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(fourOfkind === null){
        if(checkIfAllDiceSelected === 5){
            if(oneArray.length >= 4 || twoArray.length >= 4 || threeArray.length >= 4 || fourArray.length >= 4 || fiveArray.length >= 4 || sixArray.length >= 4){
                thisFourOfAKind.innerHTML= totalDice()
                fourOfkind = Number(totalDice())
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
                
            }
            else{
                thisFourOfAKind.innerHTML= "0"
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                fourOfkind = 0
                addLower()
            }
        }
        else{
            alert("Make sure to select all five dice before adding score")
        }
    }
    else{
        alert("Four of a kind spot has already been used, please make another selection")
    }
})


//full house
let oneFullHouse = null
let myFullHouse = document.getElementById("fullHouse")
myFullHouse.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(oneFullHouse === null){
        if(checkIfAllDiceSelected === 5){
            if(oneArray.length === 2 || twoArray.length === 2 || threeArray.length === 2 || fourArray.length === 2 || fiveArray.length === 2 || sixArray.length === 2){
                if(oneArray.length === 3 || twoArray.length === 3 || threeArray.length === 3 || fourArray.length === 3 || fiveArray.length === 3 || sixArray.length === 3){
                    thisFullHouse.innerHTML = "25"
                    oneFullHouse = 25
                    reset()
                    rolledDiv.innerHTML = ""
                    keptDiv.innerHTML = ""
                    addLower()
                }
                else{
                    thisFullHouse.innerHTML = "0"
                    oneFullHouse = 0
                    reset()
                    rolledDiv.innerHTML = ""
                    keptDiv.innerHTML = ""
                    addLower()
                }
            }
            else{
                thisFullHouse.innerHTML = "0"
                oneFullHouse = 0
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
        }
        else{
            alert("Make sure to select all five dice before adding score")
        }

    }
    else{
        alert("Full house spot has already been used, please make another selection")
    }
})


//sm straight
let smallSt = null
let mySmallStraight = document.getElementById("smallStraight")
mySmallStraight.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(smallSt === null){
        if(checkIfAllDiceSelected === 5){
            if(oneArray.length >= 1 && twoArray.length >= 1 && threeArray.length >= 1 && fourArray.length >= 1){
                thisSmallStraight.innerHTML = "30"
                smallSt = 30
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else if(twoArray.length >= 1 && threeArray.length >= 1 && fourArray.length >= 1 && fiveArray.length >= 1){
                thisSmallStraight.innerHTML = "30"
                smallSt = 30
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else if(threeArray.length >= 1 && fourArray.length >= 1 && fiveArray.length >= 1 && sixArray.length >= 1){
                thisSmallStraight.innerHTML = "30"
                smallSt = 30
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else{
                thisSmallStraight.innerHTML = "0"
                smallSt = 0
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
        }
        else{
            alert("Make sure to select all five dice before adding score")
        }

    }
    else{
        alert("Small straight spot has already been used, please make another selection")
    }
})


//lg straight
let oneLargeStraight = null
let myLargeStraight = document.getElementById("largeStraight")
myLargeStraight.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(oneLargeStraight === null){
        if(checkIfAllDiceSelected === 5){
            if(twoArray.length === 1 && threeArray.length === 1 && fourArray.length === 1 && fiveArray.length === 1 && sixArray.length === 1){
                thisLargeStraight.innerHTML = "40"
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                oneLargeStraight = 40
                addLower()
            }
            else if(oneArray.length === 1 && twoArray.length === 1 && threeArray.length === 1 && fourArray.length === 1 && fiveArray.length === 1){
                thisLargeStraight.innerHTML = "40"
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                oneLargeStraight = 40
                addLower()
            }
            else{
                thisLargeStraight.innerHTML = "0"
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                oneLargeStraight = 0
                addLower()
            }
        }
        else{
            alert("Make sure to select all five dice before adding score")
        }
        
    }
    else{
        alert("Chance spot has already been used, please make another selection")
    }
})


//yahtzee
let oneYahtzee = null
let myYahtzee = document.getElementById("firstYahtzee")
myYahtzee.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(checkIfAllDiceSelected === 5){
        if(oneYahtzee === null){
            if(oneArray.length === 5 || twoArray.length === 5 || threeArray.length === 5 || fourArray.length === 5 || fiveArray.length === 5 || sixArray.length === 5){
                thisYahtzee.innerHTML = "50"
                numberOfYahtzees++
                oneYahtzee = 50
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else{
                thisYahtzee.innerHTML = "0"
                oneYahtzee = 0
                numberOfYahtzees = 0
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                //make yahtzee bonus zero as well 
                thisYahtzeeBonus.innerHTML = "0"
                numberOfYahtzees = 0
                bonusYahtzeeTracker = 0
                //make bonus zero as well
                thisBonus.innerHTML = "0"
                addLower()
            }
        }
        else{
            alert("The yahtzee spot has already been used, try the bonus or make another selection")
        }
    }
    else{
        alert("Make sure to select all five dice before adding score")
    }
})


//chance
let chanceOne = null
let myChance = document.getElementById("chance")
myChance.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(chanceOne === null){
        if(checkIfAllDiceSelected === 5){
            thisChance.innerHTML= totalDice()
            chanceOne = Number(totalDice())
            reset()
            rolledDiv.innerHTML = ""
            keptDiv.innerHTML = ""
            addLower()
        }
        else{
            alert("Make sure to select all five dice before adding score")
        }
    }
    else{
        alert("The chance spot has already been used, please make another selection")
    }
})



//yahtzee bonus
let bonusYahtzeeTracker = null
let numberOfBonusYahtzee = 0
let myYahtzeeBonus = document.getElementById("yahtzeeBonus")
myYahtzeeBonus.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(checkIfAllDiceSelected === 5){
        if(numberOfYahtzees === 1 && numberOfBonusYahtzee < 3){
            if(oneArray.length === 5 || twoArray.length === 5 || threeArray.length === 5 || fourArray.length === 5 || fiveArray.length === 5 || sixArray.length === 5){
                numberOfBonusYahtzee++
                bonusYahtzeeTracker++
                thisYahtzeeBonus.innerHTML = (numberOfBonusYahtzee.toString())
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else{
                thisYahtzeeBonus.innerHTML = "0"
                numberOfYahtzees = 0
                bonusYahtzeeTracker = 0
                addLower()
            }
        }
    }
    else{
        alert("Make sure to select all five dice before adding score")
    }
})



function totalDice(){
    let totalofDice = []
    totalofDice = totalofDice.concat(oneArray)
    totalofDice = totalofDice.concat(twoArray)
    totalofDice = totalofDice.concat(threeArray)
    totalofDice = totalofDice.concat(fourArray)
    totalofDice = totalofDice.concat(fiveArray)
    totalofDice = totalofDice.concat(sixArray)
    let total = 0
    for(let i = 0; i < totalofDice.length; i++){
        total = total + totalofDice[i]
    }
    return (total.toString())
}

function addLower(){
    if(threeOfkind != null && fourOfkind != null && oneFullHouse != null && smallSt != null && oneLargeStraight != null && oneYahtzee != null && chanceOne != null && bonusYahtzeeTracker != null){
        lowerTotal = threeOfkind + fourOfkind + oneFullHouse + smallSt + oneLargeStraight + oneYahtzee + chanceOne + (numberOfBonusYahtzee * 100)
        thisLowerTotal.innerHTML = lowerTotal.toString()
        totalScore()

    }
    else{

    }
}

function totalScore(){
    if(upperTotal != null && lowerTotal != null){
        thisTotalScore.innerHTML = (upperTotal + lowerTotal).toString()
        bestGame()
    }
    else{
        
    }
}

function bestGame(){
    let scoreTotal = upperTotal + lowerTotal
    if(scoreTotal > bestScore){
        bestScore = bestScore + scoreTotal
        thisBestGmae.innerHTML = ("Best game: " + bestScore)
        resetLower()
        resetUpper()
    }
}
function resetLower(){
    numberOfYahtzees = null
    lowerTotal = null
    bestScore = 0
    threeOfkind = null
    fourOfkind = null
    oneFullHouse = null
    smallSt = null
    oneLargeStraight = null
    oneYahtzee = null
    chanceOne = null
    bonusYahtzeeTracker = null
    numberOfBonusYahtzee = 0
    thisThreeOfAKind.innerHTML = ""
    thisFourOfAKind.innerHTML = ""
    thisFullHouse.innerHTML = ""
    thisSmallStraight.innerHTML = ""
    thisLargeStraight.innerHTML = ""
    thisYahtzee.innerHTML = ""
    thisChance.innerHTML = ""
    thisYahtzeeBonus.innerHTML = ""
    thisBonus.innerHTML = ""
    thisLowerTotal.innerHTML = ""
    thisTotalScore.innerHTML = ""
}