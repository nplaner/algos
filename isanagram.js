const isAnagram = function (s, t) {
  const result = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    const temp = s[i];
    if (!result[temp]) {
      result[temp] = 1;
    } else {
      result[temp]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    const temp = t[j];
    if (!result[temp]) {
      result[temp] = 1;
    } else {
      result[temp]++;
    }
  }
  console.log(result);
  return Object.values(result).every((e) => e % 2 === 0);
};

// exceeds time limit on leetcode
const isAnagram2 = function (s, t) {
  const first = s.split('');
  const second = t.split('');
  if (first.length === 0 && second.length === 0) return true;
  if (first.length !== second.length) return false;
  if (first.indexOf(second[0]) === -1) return false;
  return first.sort().every((value, index) => value === second.sort()[index]);
};

function isAnagram3(s, t) {
  const result = {};
  s.split('').map((c) => (result[c] = result[c] ? result[c] + 1 : 1));
  t.split('').map((c) => (result[c] = result[c] ? result[c] - 1 : -1));
  return Object.keys(result).every((k) => result[k] === 0);
}
const a = 'anQagfWEdffrsadEaa_m';
const b = 'nagarafdfdsEQWEaafm_';
console.log(isAnagram3(a, b));
