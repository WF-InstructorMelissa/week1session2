function add(num1, num2) {
    sum = num1 + num2
    console.log(sum)
}
add(2,8)

// Line 1 = creating a function calling it add stating it needs 2 parameters
// Line 2 = instructions - sum is set to num1 plus num2
// Line 3 = print to the console the answer of sum
// Line 5 = activating the function and stating the 2 parameters


// create a function that give the average of 4 numbers
// sum all numbers
// then divide by 4

var num1 = 90
var num2 = 50
var num3 = 80
var num4 = 95

var sum = num1 + num2 + num3 + num4
var avg = sum/4

console.log(avg)

function average(a,b,c,d) {
    sum = a + b + c +d
    avg = sum/4
    console.log(avg)
}
// average(90,50,80,95)

arr = [80, 85, 95, 75]
function newAvg(arr) {
    var theSum = 0
    for(var i=0; i<arr.length; i++) {
         theSum += arr[i]
        console.log(theSum)
    }
    var theAvg = theSum/arr.length
    console.log(theAvg)
}
newAvg(arr)

// var string = 'It\'s going to be a long day'
// var altString = "It's going to be a long day"
// var another = 'It's going to be a long day