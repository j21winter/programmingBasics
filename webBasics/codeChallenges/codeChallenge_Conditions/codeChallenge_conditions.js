// /**
//  *! Reward for homework completion based on time of day:
//  *? Latte - before 10 am
//  *? Hot chocolate - between 10 am and 4 pm
//  *? Ice cream - between 4 pm - 10 pm.
//  *? Sleep - after 10 pm
//  */

//variables:
const date = new Date();
var time = date.getHours();
var today = date.getDay()
var arrOdd = ["Hot Chocolate","Tea","Cake"]
var arrEven = ["Ice Cream","Cookies","Candy"]

// Random number function
function randomNumber(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Function to determine treat based on time of day. 
function completeTreat(x){
    var iOdd = randomNumber(0,(arrOdd.length-1))
    var iEven = randomNumber(0,(arrEven.length -1))

    if(x < 10){
        console.log("Time for: Latte")
    }
    if(x >=10 && x < 15){
        console.log("Time for: Hot Chocolate")
    }
    if(x >=15 && x < 18 && x % 2 == 0){
        console.log("Time for: " + arrEven[iEven])
        if(arrEven[i] == "Ice Cream" && today == 3){
            console.log("Flavor: Strawberry")}
        else if(arrEven[i] == "Ice Cream" && today != 3){
                console.log("Flavor: Vanilla")}
        }
    if(x >=15 && x < 18 && x % 2 == 1){
        console.log("Time for: " + arrOdd[iOdd])
        }
    if(x >= 18 && x < 22){
        console.log("Time for: Ice-cream")
            if(today == "Wednesday"){
            console.log("Flavor: Strawberry")}
        else
            console.log("Flavor: Vanilla")}
    if(x >=22 && x < 24){
    console.log("That took way to long, get some sleep bro!")
    }
}
completeTreat(time)
