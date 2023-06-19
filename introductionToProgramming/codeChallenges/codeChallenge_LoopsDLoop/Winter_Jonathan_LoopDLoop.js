/**
 *! IoT Device for a Gym to give Candy to runners
 *! Runners will be issued a piece of candy after reaching 2 miles but stops giving candy at mile 6.
 *? Why do we need a loop? 
    **It is an incremented repeated order based on an input variable (milesRun). 
 *? What's the starting point of the loop?
    ** The candy is given out at mile 2. However, I would think the loop should start at 0 with an if statement to follow to control candy.
 *? When should the loop stop?
    ** The loop should stop once the i = 6 . 
 *?How will the loop know when to stop?
    ** We will add a conditional statement ; i <= 6.
 *? What's incrementing for each iteration of the loop?
    ** Our loop variable i will be incrementing by 1. The loop should be able to evaluated any mile input. We could increment by 2 if we wanted.
 *? What variables do we need?
    ** The variables would be miles. We would need a loop variable and potentially a Candy variable to total the candy to be issued based on miles run. 
*/

//* Assignment pt 1
//Variables needed
var milesRun = 5
var candyEarned = 0

//for loop to evaluate milesRun and candyEarned
for(var i = 0; i <= milesRun; i++){
    if(i <= 6 && i % 2 == 0 && i > 0)
        candyEarned++
        }
//Statement of variables
console.log("You ran : " + milesRun + " miles")

//User message
if (candyEarned == 0){
    console.log("Gotta run more for a Candy!!")
}
else if (candyEarned == 1){
    console.log("Congratulations you earned " + candyEarned + " candy!" )
}
else
{
    console.log("Congratulations you earned " + candyEarned + " candies!" )
}

/** 
 ** Ninja Bonus
 *! Runners will get a candy every 2 miles dependent on speed > 5.5mph.
 *? Above code is unique from below code including var. var may be restated for learning purposes. 
*/ 

//Variables needed
var milesRun = 7
var candyEarned = 0
var speed = 7

//for loop to evaulate miles run, candy earned and speed
for(var i = 0; i <= milesRun; i++){
    if(i > 0 && i % 2 == 0 && speed > 5.5)
        candyEarned++
}
console.log("You ran " + milesRun + " miles at a speed of " + speed + " mph")
console.log("You earned " + candyEarned + " pieces of candy!")

