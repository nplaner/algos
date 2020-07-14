const shortestToChar = function (S, C) {
  const result = [];
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (S[i + j] === C || S[i - j] === C) {
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
