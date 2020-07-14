const findUnsortedSubarray = function (nums) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  if (nums.length === 1) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[leftPointer] <= nums[leftPointer + 1]) leftPointer++;
    if (nums[rightPointer] >= nums[rightPointer - 1]) rightPointer--;
    console.log(leftPointer);
    console.log(rightPointer);
  }
  return nums.slice(leftPointer, rightPointer + 1).length;
};

const nums = [2, 6, 4, 8, 10, 9, 15];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 2, 3, 3, 3];
const nums4 = [1, 3, 2, 2, 2];
console.log(findUnsortedSubarray(nums3));
