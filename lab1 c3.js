//Write program to find sum of even digits. Input 23617 output 2+6=8.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvens = (arr) => {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0){ 
        console.log(i);
    sum = sum + arr[i];
    }
  }
  return sum;
}
 
console.log("sum is : "+sumEvens(arr));