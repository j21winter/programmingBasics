/** 
Given an array, remove and return the value at the beginning of the array.
Do this without using any built-in array methods except pop().
For example, popFront([5, 93, 22, 4]) should return 5 and the original array should result as [93, 22, 4].
 */

// I will need to store arr[0], remove it from the array and return that value using pop.
//move each number down an index
//pop the last index


var arr = [1,2,3,4,5,93,33,4]

function popFront(x){
    x[x.length] = x[0]
    // console.log(x)
    var result = x[x.length-1]
    for(var i = 1; i<x.length; i++){
        x[i-1] = x[i]
        // console.log(i)
        // console.log(x)
    }
    x.pop()
    x.pop()
    console.log(`Array is now [${x}]`)
    return result
}
console.log(`result is ${popFront(arr)}`)