const judgeCircle = function (moves) {
  const result = [0, 0];
  const origin = [0, 0];
  const movesplit = moves.split('');
  for (let i = 0; i < moves.length; i++) {
    if (movesplit[i] === 'U') result[0] += 1;
    else if (movesplit[i] === 'D') result[0] -= 1;
    else if (movesplit[i] === 'L') result[1] -= 1;
    else if (movesplit[i] === 'R') result[1] += 1;
    console.log(result);
  }
  for (let j = 0; j < result.length; j++) {
    if (result[j] !== origin[j]) return false;
  }
  return true;
};

console.log(judgeCircle('RRLLUUD'));
