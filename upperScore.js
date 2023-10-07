let rolledDiv = document.getElementById("rolledDiv")
let keptDiv = document.getElementById("keptDiv")
let upperTotal = null



//aces
let one = null
let myAces = document.getElementById("aces")
myAces.addEventListener("click", myFunction => {
    if(one === null){
        one = (oneArray.length*1).toString()
        let a = document.getElementById("recordAces")
        a.innerHTML = one
        reset()
        addUpper()
        rolledDiv.innerHTML = ""
        keptDiv.innerHTML = ""
    }
    else{
        alert("The aces spot has already been used, please make another selection")
    }
})

//twos
let two = null
let myTwos = document.getElementById("twos")
myTwos.addEventListener("click", myFunction => {
    if(two === null){
        two = (twoArray.length*2).toString()
        let a = document.getElementById("recordTwos")
        a.innerHTML = two
        reset()
        addUpper()
        rolledDiv.innerHTML = ""
        keptDiv.innerHTML = ""
    }
    else{
        alert("The twos spot has already been used, please make another selection")
    }
})

//threes
let three = null
let myThrees = document.getElementById("threes")
myThrees.addEventListener("click", myFunction => {
    if(three === null){
        three = (threeArray.length*3).toString()
        let a = document.getElementById("recordThrees")
        a.innerHTML = three
        reset()
        addUpper()
        rolledDiv.innerHTML = ""
        keptDiv.innerHTML = ""
    }
    else{
        alert("The threes spot has already been used, please make another selection")
    }
})


//fours
let four = null
let myFours = document.getElementById("fours")
myFours.addEventListener("click", myFunction => {
    if(four === null){
        four = (fourArray.length*4).toString()
        let a = document.getElementById("recordFours")
        a.innerHTML = four
        reset()
        addUpper()
        rolledDiv.innerHTML = ""
        keptDiv.innerHTML = ""
    }
    else{
        alert("The fours spot has already been used, please make another selection")
    }
})


//fives
let five = null
let myFives = document.getElementById("fives")
myFives.addEventListener("click", myFunction => {
    if(five === null){
        five = (fiveArray.length*5).toString()
        let a = document.getElementById("recordFives")
        a.innerHTML = five
        reset()
        addUpper()
        rolledDiv.innerHTML = ""
        keptDiv.innerHTML = ""
    }
    else{
        alert("The fives spot has already been used, please make another selection")
    }
})


//sixes
let six = null
let mySixes = document.getElementById("sixes")
mySixes.addEventListener("click", myFunction => {
    if(six === null){
        six = (sixArray.length*6).toString()
        let a = document.getElementById("recordSixes")
        a.innerHTML = six
        reset()
        addUpper()
        rolledDiv.innerHTML = ""
        keptDiv.innerHTML = ""
    }
    else{
        alert("The sixes spot has already been used, please make another selection")
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
    let a = document.getElementById("recordUpperScore")
    if(one != null && two != null && three != null && four != null && five != null && six != null){
        upperTotal = Number(one) + Number(two) + Number(three) + Number(four) + Number(five) + Number(six)
        if(upperTotal >= 63){
            
            a.innerHTML = ((upperTotal.toString()))
            let u = document.getElementById("recordUpperBonus")
            u.innerHTML = "35"
            upperTotal = upperTotal + 35
        }
        else{
            a.innerHTML = ((upperTotal.toString()))
            let u = document.getElementById("recordUpperBonus")
            u.innerHTML = "0"
        }
        let ut = document.getElementById("recordUpperTotalScore")
        ut.innerHTML = (upperTotal.toString())
    }
    else{

    }
}