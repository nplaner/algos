const fairCandySwap = function (A, B) {
  const alice = A.reduce((a, b) => a + b, 0);
  const bob = B.reduce((a, b) => a + b, 0);
  const diff = Math.abs(alice - bob);
};
