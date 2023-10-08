let rolledDiv = document.getElementById("rolledDiv")
let keptDiv = document.getElementById("keptDiv")
let upperTotal = null


//DOM select for each score
let thisOne = document.getElementById("recordAces")
let thisTwo = document.getElementById("recordTwos")
let thisThree = document.getElementById("recordThrees")
let thisFour = document.getElementById("recordFours")
let thisFive = document.getElementById("recordFives")
let thisSix = document.getElementById("recordSixes")
let thisUpperScore = document.getElementById("recordUpperScore")
let thisUpperBonus = document.getElementById("recordUpperBonus")
let thisUpperTotalScore = document.getElementById("recordUpperTotalScore")

//aces
let one = null
let myAces = document.getElementById("aces")
myAces.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(checkIfAllDiceSelected === 5){
        if(one === null){
            one = (oneArray.length*1).toString()
            thisOne.innerHTML = one
            reset()
            addUpper()
            rolledDiv.innerHTML = ""
            keptDiv.innerHTML = ""
        }
        else{
            alert("The aces spot has already been used, please make another selection")
        }
    }
    else{
        alert("Make sure to select all five dice before adding score")
    }
})

//twos
let two = null
let myTwos = document.getElementById("twos")
myTwos.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(checkIfAllDiceSelected === 5){
        if(two === null){
            two = (twoArray.length*2).toString()
            thisTwo.innerHTML = two
            reset()
            addUpper()
            rolledDiv.innerHTML = ""
            keptDiv.innerHTML = ""
        }
        else{
            alert("The twos spot has already been used, please make another selection")
        }
    }
    else{
        alert("Make sure to select all five dice before adding score")
    }
})

//threes
let three = null
let myThrees = document.getElementById("threes")
myThrees.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(checkIfAllDiceSelected === 5){
        if(three === null){
            three = (threeArray.length*3).toString()
            thisThree.innerHTML = three
            reset()
            addUpper()
            rolledDiv.innerHTML = ""
            keptDiv.innerHTML = ""
        }
        else{
            alert("The threes spot has already been used, please make another selection")
        }
    }
    else{
        alert("Make sure to select all five dice before adding score")
    }
})


//fours
let four = null
let myFours = document.getElementById("fours")
myFours.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(checkIfAllDiceSelected === 5){
        if(four === null){
        four = (fourArray.length*4).toString()
        thisFour.innerHTML = four
        reset()
        addUpper()
        rolledDiv.innerHTML = ""
        keptDiv.innerHTML = ""
        }
        else{
            alert("The fours spot has already been used, please make another selection")
        }
    }
    else{
        alert("Make sure to select all five dice before adding score")
    }
})


//fives
let five = null
let myFives = document.getElementById("fives")
myFives.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(checkIfAllDiceSelected === 5){
        if(five === null){
            five = (fiveArray.length*5).toString()
            thisFive.innerHTML = five
            reset()
            addUpper()
            rolledDiv.innerHTML = ""
            keptDiv.innerHTML = ""
        }
        else{
            alert("The fives spot has already been used, please make another selection")
        }
    }
    else{
        alert("Make sure to select all five dice before adding score")
    }
})


//sixes
let six = null
let mySixes = document.getElementById("sixes")
mySixes.addEventListener("click", myFunction => {
    let checkIfAllDiceSelected = ( oneArray.length + twoArray.length + threeArray.length + fourArray.length + fiveArray.length + sixArray.length)
    if(checkIfAllDiceSelected === 5){
        if(six === null){
            six = (sixArray.length*6).toString()
            thisSix.innerHTML = six
            reset()
            addUpper()
            rolledDiv.innerHTML = ""
            keptDiv.innerHTML = ""
        }
        else{
            alert("The sixes spot has already been used, please make another selection")
        }
    }
    else{
        alert("Make sure to select all five dice before adding score")
    }
})

function reset(){
    rollOne = []
    rollTwo = []
    rollThree = []
    oneArray = []
    twoArray = []
    threeArray = []
    fourArray = []
    fiveArray = []
    sixArray = []
    numberOfRolls = 0
}
function addUpper(){
    
    if(one != null && two != null && three != null && four != null && five != null && six != null){
        upperTotal = Number(one) + Number(two) + Number(three) + Number(four) + Number(five) + Number(six)
        totalScore()
        if(upperTotal >= 63){
            thisUpperScore.innerHTML = ((upperTotal.toString()))
            thisUpperBonus.innerHTML = "35"
            upperTotal = upperTotal + 35
        }
        else{
            thisUpperScore.innerHTML = ((upperTotal.toString()))
            thisUpperBonus.innerHTML = "0"
        }
        thisUpperTotalScore.innerHTML = (upperTotal.toString())
    }
    else{

    }
}
function resetUpper(){
    one = null
    two = null
    three = null
    four = null
    five = null
    six = null
    upperTotal = null
    thisOne.innerHTML = ""
    thisTwo.innerHTML = ""
    thisThree.innerHTML = ""
    thisFour.innerHTML = ""
    thisFive.innerHTML = ""
    thisSix.innerHTML = ""
    thisUpperScore.innerHTML = ""
    thisUpperBonus.innerHTML = ""
    thisUpperTotalScore.innerHTML = ""
}