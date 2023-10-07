let numberOfYahtzees = null
let lowerTotal = null

//3 of a kind 
let threeOfkind = null
let myThreeOfAKind = document.getElementById("threeOfAKind")
myThreeOfAKind.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(threeOfkind === null){
        if(checkIfAllDiceSelected === 5){
            if(oneArray.length >= 3 || twoArray.length >= 3 || threeArray.length >= 3 || fourArray.length >= 3 || fiveArray.length >= 3 || sixArray.length >= 3){
                let d = document.getElementById("threeKind")
                d.innerHTML= totalDice()
                threeOfkind = Number(totalDice())
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
                
            }
            else{
                let d = document.getElementById("threeKind")
                d.innerHTML= "0"
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
                let d = document.getElementById("fourKind")
                d.innerHTML= totalDice()
                fourOfkind = Number(totalDice())
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
                
            }
            else{
                let d = document.getElementById("fourKind")
                d.innerHTML= "0"
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
            console.log("all five dice were selected")
            if(oneArray.length === 2 || twoArray.length === 2 || threeArray.length === 2 || fourArray.length === 2 || fiveArray.length === 2 || sixArray.length === 2){
                console.log("First IF was successful")
                if(oneArray.length === 3 || twoArray.length === 3 || threeArray.length === 3 || fourArray.length === 3 || fiveArray.length === 3 || sixArray.length === 3){
                    console.log("second IF was S")
                    let f1 = document.getElementById("FH")
                    f1.innerHTML = "25"
                    oneFullHouse = 25
                    reset()
                    rolledDiv.innerHTML = ""
                    keptDiv.innerHTML = ""
                    addLower()
                }
                else{
                    let f2 = document.getElementById("FH")
                    f2.innerHTML = "0"
                    oneFullHouse = 0
                    reset()
                    rolledDiv.innerHTML = ""
                    keptDiv.innerHTML = ""
                    addLower()
                }
            }
            else{
                let f2 = document.getElementById("FH")
                f2.innerHTML = "0"
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
            if(oneArray.length >= 1 && twoArray.length >= 1 && threeArray >= 1 && fourArray.length >= 1){
                let s = document.getElementById("smStraight")
                s.innerHTML = "30"
                smallSt = 30
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else if(twoArray.length >= 1 && threeArray >= 1 && fourArray.length >= 1 && fiveArray.length >= 1){
                let s = document.getElementById("smStraight")
                s.innerHTML = "30"
                smallSt = 30
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else if(threeArray >= 1 && fourArray.length >= 1 && fiveArray.length >= 1 && sixArray.length >= 1){
                let s = document.getElementById("smStraight")
                s.innerHTML = "30"
                smallSt = 30
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else{
                let s = document.getElementById("smStraight")
                s.innerHTML = "0"
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
                let c1 = document.getElementById("lgStraight")
                c1.innerHTML = "40"
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                oneLargeStraight = 40
                addLower()
            }
            else if(oneArray.length === 1 && twoArray.length === 1 && threeArray.length === 1 && fourArray.length === 1 && fiveArray.length === 1){
                let c2 = document.getElementById("lgStraight")
                c2.innerHTML = "40"
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                oneLargeStraight = 40
                addLower()
            }
            else{
                console.log("else")
                let c3 = document.getElementById("lgStraight")
                c3.innerHTML = "0"
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
                let c = document.getElementById("recordFirstYahtzee")
                c.innerHTML = "50"
                numberOfYahtzees++
                oneYahtzee = 50
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else{
                let c = document.getElementById("recordFirstYahtzee")
                c.innerHTML = "0"
                oneYahtzee = 0
                numberOfYahtzees = 0
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                //make yahtzee bonus zero as well 
                let b = document.getElementById("bonusYahtzee")
                b.innerHTML = "0"
                numberOfYahtzees = 0
                let z = document.getElementById("bonus")
                z.innerHTML = "0"
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
            let d = document.getElementById("chances")
            d.innerHTML= totalDice()
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
let numberOfBonusYahtzee = 0
let myYahtzeeBonus = document.getElementById("yahtzeeBonus")
myYahtzeeBonus.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(checkIfAllDiceSelected === 5){
        if(numberOfYahtzees === 1 && numberOfBonusYahtzee < 3){
            if(oneArray.length === 5 || twoArray.length === 5 || threeArray.length === 5 || fourArray.length === 5 || fiveArray.length === 5 || sixArray.length === 5){
                numberOfBonusYahtzee++
                let c = document.getElementById("bonusYahtzee")
                c.innerHTML = (numberOfBonusYahtzee.toString())
                reset()
                rolledDiv.innerHTML = ""
                keptDiv.innerHTML = ""
                addLower()
            }
            else{
                let c = document.getElementById("bonusYahtzee")
                c.innerHTML = "0"
                numberOfYahtzees = 0
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
    let l = document.getElementById("lowerScore")
    if(threeOfkind != null && fourOfkind != null && oneFullHouse != null && smallSt != null && oneLargeStraight != null && oneYahtzee != null && chanceOne != null){
        lowerTotal = threeOfkind + fourOfkind + oneFullHouse + smallSt + oneLargeStraight + oneYahtzee + (numberOfBonusYahtzee * 100)
        l.innerHTML = lowerTotal.toString()
        totalScore()

    }
    else{

    }
}

function totalScore(){
    let x = document.getElementById("grandTotal")
    if(upperTotal != null && lowerTotal != null){
        x.innerHTML = (upperTotal + lowerTotal).toString()
    }
    else{
        
    }
}