// In a VS Code file, do the following:
// Using comments, write out 1 strategy that could be used to solve the problem.
// Using comments, create pseudocode (an informal but readable description of code that uses regular language to outline a solution) to apply one of the strategies to solve the problem.
// Using comments, write a short paragraph that answers: What is the hardest part of problem-solving?
/**
 ** User Story
 **  A computer application needs to be able to identify if a written paragraph is written in First, Second, or Third Person (check out the following if you'd like a refresher on First, Second, and Third Person: Refresher Courtesy of Grammarly)
 *! Step 1
 *? we could add the paragraph into an array and loop through the words in the array to identify pronouns, second-person pronouns or third-person pronouns. These would be matching an if statement for first, second and third person using matching "strings".
 *? add paragraph into an array. var paragraph = ["I", "am", "trying", "to", "think"]
 *? function identifyWritingPerspective(arr)
 *? for loop to move through all data in the array. Starting at 0 (var i = 0) and ending at the last word (i<array.length), and increment by 1 each time (i++)
 *?for(var i = 0; i < arr.length; i++)
 *? does the word in the array match a certain pronoun type (if(arr[i] == "i" || arr[i] = "my" etc))
 *? we will need to check each list for first, second and third person to make a determination. 
 *? if it does not match it should move to the next word. 
 *? the more I think about it we should compare the paragraph word to words within a pronoun list array? This may means multiple loops for each array. (Paragraph, firstperson, secondperson, thirdperson)
 *? if one word does match a word in the pronoun list then send back a true or false/ send back result of which type of writing it is. 
*/
/**
 *! Step 2
 */
// Variables
var text = "My name is Jonny and I am in Web Fundamentals at CodingDojo in the part time accelerated course. I am learning alot.";
var readMe = text.split(" ");
console.log(readMe)
var firstPerson = ["I", "we", "my"];  // variable list of 1st person pronouns as strings
var secondPerson = ["you"];  //variable list of 2nd person pronouns as strings
var thirdPerson = ["he", "she", "they"];  // variable list of 3rd person pronouns as strings

//Function to be called 
function IdWritingPerspective (arr){
//for loop to run through the arr parameter 
for(var i = 0; i < arr.length; i++){
//for loop to run through and compare any words in 1st
for(var ii = 0; ii < firstPerson.length; ii++ ){ //run through 1stPerson array
        if(arr[i] == firstPerson[ii]){ // comparing 1st person word to arr word
        console.log("Paragraph written in First-Person")
        break } //break loop if condition is met. 
        if(arr[i] == secondPerson[ii]){ //compare 2nd person words to arr word
        console.log("Paragraph written in Second-Person")
        break} // break loop if condition is met
        if(arr[i] == thirdPerson[ii]){ // comparing 3rd person words to arr words
    console.log("Paragraph written in Third-Person")}
    break} // break loop if condition is met
}
}


IdWritingPerspective(readMe)

/** 
 *! step 3 - What is difficult about problem solving
I think the most difficult step trying to stop yourself from going right to the answer. 
The key to it is often breaking the problem down into multiple steps and identifying what 
is it we are trying to achieve and what small steps should we take to get there. 
I think another difficulty is taking in so much information at once that we cannot process 
how that information can be used. This would be me getting stuck in trying to work it all out in 
my head. For me it helps to complete the process above because I am verbalizing it and getting
it out of my brain  and onto something in front of me. 
The final issue I find is doubting if the solution you have theorized is going to work or not.
Its tough when you put a lot of work into something and find that it is not right. Being able to 
accept that and scrap that work can be hard but at this point in my learning I think its only
beneficial  to my future coding and problem solving skills. 
 */