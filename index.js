let numberOfRolls = 0
let newPrompt = document.createElement('p')
newPrompt.setAttribute('id', 'promptMessage')

function main() {
    prompt(numberOfRolls)
    let myButton = document.getElementById("rollButton")
    myButton.addEventListener("click", myFunction => {
        prompt(numberOfRolls)
        console.log("the number of rolls are " + numberOfRolls)
        rollDice(numberOfRolls)
    })
}


main()



function prompt(numberOfRolls) {
    if(numberOfRolls > 3){
        document.getElementById('promptMessage').innerHTML = 'No more rolls, please write your score down'
    }
    else{
        document.getElementById('promptMessage').innerHTML = 'Please roll dice' 
    }

}