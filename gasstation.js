const canCompleteCircuit = (gas, cost) => {
  let start = cost.indexOf(Math.min(...cost));
  let current = gas[start];
  while (current >= cost[((start % cost.length) + cost.length) % cost.length]) {
    console.log(current);
    current =
      current -
      cost[((start % cost.length) + cost.length) % cost.length] +
      gas[(start + 1) % gas.length];
    console.log(start);
    start++;
    if (current < 0) return -1;
  }
  return start;
};

// const canCompleteCircuit = function (gas, cost) {
//   let curTank = 0;
//   let totalTank = 0;
//   let pos = 0;
//   for (let i = 0; i < gas.length; i++) {
//     curTank += gas[i] - cost[i];
//     console.log(curTank);
//     totalTank += gas[i] - cost[i];
//     console.log(totalTank);
//     if (curTank < 0) {
//       curTank = 0;
//       pos = i + 1;
//       console.log(pos);
//     }
//   }
//   return totalTank < 0 ? -1 : pos;
// };

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
