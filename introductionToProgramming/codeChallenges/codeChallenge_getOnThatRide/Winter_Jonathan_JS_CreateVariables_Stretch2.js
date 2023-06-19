//Stretch 2 - Requirements: either Height and Age to be true
// variables to determine rider minimum requirements for to theme park ride
var minAge = 10;
var minHeight = 42;
// input variables
let userAge;
let userHeight;

// Function to display affirmative statement "Get on that ride, kiddo!" or negative statement "Sorry kiddo. Maybe next year."
function rideApproval(){
    if(userHeight >= minHeight || userAge >= minAge){
        console.log("Get on that ride, kiddo!")
    }
    else {
        console.log("Sorry kiddo. Maybe next year.")
    }
}

rideApproval()