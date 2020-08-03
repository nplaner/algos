/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      sum += prices[i + 1] - prices[i];
    }
  }
  return sum;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
