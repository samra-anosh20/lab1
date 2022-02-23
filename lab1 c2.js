// Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20

//convert string to array
const string='23671';
let arr=Array.from(string);
console.log(arr);

arr=[2,3,6,7,1]
const reducer=(acc,curr)=>acc + curr;
console.log("sum is :" +arr.reduce(reducer));