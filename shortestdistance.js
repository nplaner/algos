const shortestToChar = function (S, C) {
  const result = [];
  const a = S.split('');
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i + j] === C) {
        result.push(j);
        break;
      }
    }
  }
  return result;
};
const S = 'loveleetcode';
const C = 'e';
console.log(shortestToChar(S, C));
