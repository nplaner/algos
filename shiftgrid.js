const shiftGrid = function (grid, k) {
  const flat = grid.flat();
  console.log(flat);
  while (k) {
    flat.unshift(flat.pop());
    --k;
  }
  console.log(flat);
  const chunk = grid[0].length;
  const result = [];
  while (flat.length) {
    result.push(flat.splice(0, chunk));
  }
  return result;
};

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(shiftGrid(grid, 4));
