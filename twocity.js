const twoCitySchedCost = function (costs) {
  const l = costs.length / 2;
  let cityOne = 0;
  let cityTwo = 0;
  const result = [];
  costs.sort(([a1, b1], [a2, b2]) => a1 - b1 - (a2 - b2));
  console.log(result);
  return costs;
};

const input = [
  [10, 20],
  [30, 200],
  [400, 50],
  [30, 20],
];

console.log(twoCitySchedCost(input));
console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
);
