//make a dice roll
let rollOne = []
let rollTwo = []
let rollThree = []




function rollDice(numberOfRolls){
    let numberOfDiceSelected = oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length
    if(numberOfRolls === 3){
        for(let i = 0; i < (5-numberOfDiceSelected); i++){
            rollThree[i] = Math.floor(Math.random() * 6) + 1
        }
        displayDice(rollThree)
    } 
    if (numberOfRolls === 2){
        for(let i = 0; i < (5-numberOfDiceSelected); i++){
            rollTwo[i] = Math.floor(Math.random() * 6) + 1
        }
        displayDice(rollTwo)
    }
    if(numberOfRolls === 1){
        for(let i = 0; i < 5; i++){
            rollOne[i] = Math.floor(Math.random() * 6) + 1
        }
        displayDice(rollOne)
    } 
}