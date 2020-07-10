const isAnagram = function (s, t) {
  const result = {};
  const first = s.split('');
  const second = t.split('');
  if (s.length !== t.length) return false;
  for (let i = 0; i < first.length; i++) {
    const temp = first[i];
    if (!result[temp]) {
      result[temp] = 1;
    } else {
      result[temp]++;
    }
  }
  for (let j = 0; j < second.length; j++) {
    const temp = second[j];
    if (!result[temp]) {
      result[temp] = 1;
    } else {
      result[temp]++;
    }
  }
  console.log(result);
  return Object.values(result).every((e) => e % 2 === 0);
};

const a = 'anagfdfram';
const b = 'nagarafdfm';
console.log(isAnagram(a, b));

//exceeds time limit on leetcode
const isAnagram2 = function (s, t) {
  const first = s.split('');
  const second = t.split('');
  if (first.length === 0 && second.length === 0) return true;
  if (first.length !== second.length) return false;
  if (first.indexOf(second[0]) === -1) return false;
  return first.sort().every((value, index) => value === second.sort()[index]);
};
