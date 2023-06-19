/**
Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order.

Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

For example, minToFront([5, 93, 22, 4]) should return [4, 5, 93, 22].
*/



function minToFront(arr){
    var min = arr[0]
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
        min = arr[i]
        var minIndex = i
        }
    }
    arr.splice(minIndex,1)
    arr.unshift(min)
    return arr
}

console.log(minToFront([5, 93, 22, 4]))
