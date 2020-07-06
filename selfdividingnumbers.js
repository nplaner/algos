const selfDividingNumbers = function (left, right) {
  const array = [];
  for (let i = left; i <= right; i++) array.push(i);
  array.forEach((e) => {
    const d = e.toString().split('');
    console.log(d);
    // for (let j = 0; j < d.length; j++) {
    //   if (e % d[j] !== 0) {
    //     console.log(d[j]);
    //     const index = array.indexOf(e);
    //     console.log(index);
    //     array.splice(index, 1);
    //   }
    // }
  });
  return array;
};

console.log(selfDividingNumbers(10, 14));
