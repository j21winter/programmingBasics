// function to say good day "name" with a time stamp. 
    // Extra, Count Dooku enemy message "I am coming for you, Dooku!" if function is called with Count Dooku.

function greet(a,b){
    if(a == "Count Dooku"){
        console.log("I am coming for you, Dooku!")
    }else{
        console.log ("Good day, " + a + ". The time is: " + b)
    }
}
greet("Jonny Winter","2:00pm")
greet("Count Dooku","2:00pm")