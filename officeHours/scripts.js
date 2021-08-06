// Create a function that adds the grades for 1 student and gives the final average

// Pseudocode
// 1. Create a function that takes an array of numbers
// 2. Add all numbers together
// 3. Divide the sum by # of grades.
// 4. Print final answer

var arr = [90, 80, 50, 90] // var called arr that set to an array of numbers.  index 0 = 1st entry

var sum = 0 // start sum off with the value of 0
for(var i = 0; i < arr.length; i++) { // creating a loop to go through all the numbers we pass in (1st part is where to start, 2nd is where to stop, 3rd how to move each time through)
    sum = sum + arr[i] // taking current value of sum (starts at 0) now setting it = to its self plus the current value of i
}
console.log(sum/4)
console.log(sum/arr.length)
// above 2 console.logs say the same thing and will return the same answer #2 is better as it is not always known the length of an array

var avg = 0
var sum = 0

function finalGrade(arr) {
    for(var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        console.log("loop",sum)
    }
    avg = sum/arr.length
    console.log("avg",avg)
}
finalGrade(arr)

// = means setting a var
// == equals too
// === exactly equals too

// create a function that prints the even numbers from 20-40 in a new array

// Pseudocode
// 1. create a function
// 2. create for loop to go through the numbers 20-40
// 3. create new empty array to put even numbers in
// 4. conditional statement to determine even vs odd

function evenOnly() {
    var even = []
    for(var i = 20; i <= 40; i++) {
        if(i % 2 == 0) { // if the value of i / 2 has no remainder
            even.push(i) // if this is true push the value of i into the even array
        }
    }
    console.log(even)
}
evenOnly()