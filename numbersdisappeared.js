const findDisappearedNumbers = (nums) => {
  console.log(Math.max(...nums));
  const max = Math.max(...nums);
  const a = Array.from(Array(max), (_, i) => i + 1);
  console.log(a);
  const unique = [...new Set(nums)];
  console.log(unique);
  for (let i = 0; i < unique.length; i++) {
    if (a.indexOf(unique[i])) {
      console.log(a);
      const index = a.indexOf(unique[i]);
      a.splice(i, 1);
    }
  }
  console.log(a);
  return a;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
