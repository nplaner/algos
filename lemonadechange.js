const lemonadeChange = function (bills) {
  const onHand = { 5: 0, 10: 0, 20: 0 };
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) onHand[5] += 1;
    if (bills[i] === 10) {
      console.log(onHand[5]);
      if (onHand[5] < 1) {
        return false;
      } else {
        onHand[10]++;
        onHand[5]--;
      }
    }
    if (bills[i] === 20) {
      if (onHand[10] >= 1 && onHand[5] <= 1) {
        onHand[20]++;
        onHand[10]--;
        onHand[5]--;
      } else if (onHand[5] >= 3) {
        onHand[5] -= 3;
      } else return false;
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 5, 10, 5, 20, 10, 5, 5]));
