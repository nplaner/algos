// Given an MxN matrix, write code which prints out the diagnoals
// (from upper right to lower left) of the matrix
// Example M = 4, N = 3
/*  
    [[9, 3, 2],
    [8, 6, 1],
    [5, 5, 6],
    [1, 2, 8]]
Should output: 
9       [0][0]
3 8     [0][1] [1][0]
2 6 5   [0][2] [1][1] [2][0]
1 5 1   [1][2] [2][1] [3][0]
6 2     [2][2] [3][1]
8       [3][2]
*/

const matrixDiag = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // pattern i++, j--
      console.log(matrix[i][j]);
    }
  }
  return;
};

console.log(
  matrixDiag([
    [9, 3, 2],
    [8, 6, 1],
    [5, 5, 6],
    [1, 2, 8],
  ])
);
