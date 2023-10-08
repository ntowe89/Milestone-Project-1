let numberOfRolls = 0
let newPrompt = document.createElement('p')
newPrompt.setAttribute('id', 'promptMessage')

function main() {
    prompt(numberOfRolls)
    let myButton = document.getElementById("rollButton")
    myButton.addEventListener("click", myFunction => {
        numberOfRolls++
        prompt(numberOfRolls)
        console.log("the number of rolls are " + numberOfRolls)
        rollDice(numberOfRolls)
    })
}


main()



function prompt(numberOfRolls) {
    if(numberOfRolls > 0 && numberOfRolls < 4){
        document.getElementById('promptMessage').innerHTML = 'Roll ' + (numberOfRolls.toString()) + '/3'
    }
    else if(numberOfRolls >= 4){
        document.getElementById('promptMessage').innerHTML = 'You have no more rolls, please submit your score' 
    }
    else{
        document.getElementById('promptMessage').innerHTML = 'Please roll dice' 
    }

}