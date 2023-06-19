// find the best corner to park a taco truck 
// the best corner will be the most efficient for travel distance for his clients throughout the city .  

// I will need to map out the city
// I will need to input the coordinates of the clients
// I will need to judge the distance to every single coordinate on the map from each client
// I will need to then sum each distance together to calculate the best corner to park on. 
// I must remember that I can only park in one spot 
// distances from each member may be roughly equitable for each client. 
// there for we would be looking for the center of the square or middle of the line etc. 


//task 1 find the middle of a line

// var customerCoordinates = [[0,0],[0,5],[4,2]]

// function findParkingSpot(arr){
//     for(var i = 0; i < arr.length; i++){ //loop to run through main arr
//         console.log(i)
//         if(arr[i] = Array){
//             for(var ii = 0; ii > arr.length;ii++)
//             customer.push([arr[i],arr[ii]])
//         console.log(ii)}
//         var customer = []
//         var customerLocations =[]
//         customerLocations.push(customer)
// }
// }

// findParkingSpot(customerCoordinates)


let customerCoordinates = [];
for (let i = 0; i < 1000; i++) {
    let x = Math.floor(Math.random() * 10000); 
    let y = Math.floor(Math.random() * 10000); 
    customerCoordinates.push([x, y]);
}
//console.log(customerCoordinates)


function secondTry(arr){
    var sumX = 0
    var sumY = 0
    for(var i = 0; i < arr.length; i++){
        sumX += arr[i][0]
        sumY += arr[i][1]
    }
    var avgX = Math.round(sumX/i)
    var avgY = Math.round(sumY/i)
    return ([avgX,avgY])
}
var truckSpot = secondTry(customerCoordinates)
console.log(`Joe should park at ${truckSpot}`)

// biggest issue is that this code does not take into account the actual distance traveled for all customers. It only takes the average position between x and y coordinates for customers. 
// This is something I think I need more context upon and increased depth of knowledge to improve. 
//
