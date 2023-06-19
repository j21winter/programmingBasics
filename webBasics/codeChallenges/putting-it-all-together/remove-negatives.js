// Debug the following code that removes negative values from an array

var arr = [3, 7, -23, 0, 2.5, -4]
function removeNegatives(x) {
    for(var i=0; i < x.length; i++) {
        if(x[i] < 0) {
            x.splice(i,1);
        }
    }
    return arr;
}

var result = removeNegatives(arr);
console.log(result);

