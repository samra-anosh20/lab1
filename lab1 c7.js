//Write a JavaScript program to check whether 10 appears in first or last position 
//of a given array of integers. The array length must be greater or equal to 2.
function first_last(nums)
{
  var end_pos = nums.length - 1;
  return nums[0] == 10|| nums[end_pos] == 10;
}


console.log(first_last([10, 3, 5]));
console.log(first_last([1, 3, 5, 1]));
console.log(first_last([2, 4, 10]));