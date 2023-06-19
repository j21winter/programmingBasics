//Cake has 12 pieces
//5 people eating cake
//create function called howMuchLeftOverCake with variables: numberOfPieces, numberOfPeople

var numberOfPieces = 12
var numberOfPeople = 5

function howMuchLeftOverCake(a, b){
    var result = (a - b)
    console.log(result)
    if( result == 0 ){
        console.log("No leftovers for you!")
    }
    else if(result <= 2){
        console.log("You have some leftovers")
    }
    else if(result > 2 && result <= 5){
        console.log("You have leftovers to share")
    }
    else
    {
        console.log("Hold another party!")
    }

}

howMuchLeftOverCake(numberOfPieces,numberOfPeople)