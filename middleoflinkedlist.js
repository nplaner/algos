const middleNode = function (head) {
  let length = 0;
  let count = 0;
  let temp = head;
  let current = head;
  while (temp !== null) {
    length++;
    temp = temp.next;
  }
  const midIndex = Math.floor(length / 2);
  while (current !== null) {
    if (count === midIndex) return current;
    count++;
    current = current.next;
  }
};
