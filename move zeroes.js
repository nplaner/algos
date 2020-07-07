// const moveZeroes = function (nums) {
//   let counter = 1;
//   const i = nums.slice(0, counter * -1).indexOf(0);
//   console.log(i);
//   while (i) {
//     nums.push(nums.splice(i, 1));
//     counter++;
//   }
//   return nums;
// };

const moveZeroes2 = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) counter++;
  }
  nums = nums.filter(Number);
  while (counter > 0) {
    nums.push(0);
    counter--;
  }
  return nums;
};

const numbers = [0, 1, 0, 3, 12];
console.log(moveZeroes2(numbers));
