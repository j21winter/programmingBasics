// Updated for Code challenge get on that ride (assignment)
// Rider height has to be >42
// variables to determine rider minimum requirements for to theme park ride
var minAge = 10;
var minHeight = 42;
// input variables
let userAge;
let userHeight;

// Function to display affirmative statement "Get on that ride, kiddo!" or negative statement "Sorry kiddo. Maybe next year."
function rideApproval(){
    if(userHeight > minHeight){
        console.log("Get on that ride, kiddo!")
    }
    else {
        console.log("Sorry kiddo. Maybe next year.")
    }
}

rideApproval()