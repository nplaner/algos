const findLucky = function (arr) {
  const array = [];
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) result[arr[i]] = 1;
    else {
      result[arr[i]]++;
    }
  }
  console.log(result);
  Object.entries(result).forEach(([key, value]) => {
    if (key == value) array.push(`${key}`);
  });
  console.log(array);
  return array.length === 0 ? -1 : Math.max(...array);
};

console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3]));
