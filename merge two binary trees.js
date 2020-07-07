const mergeTrees = function (t1, t2) {
  // convert both trees to arrays including the null values(whichever method)
  // let queue = [t1,t2]
  // loop through both arrays at the same time and if one array is null push the other onto the result array, otherwise push the sum of arr1[i] +           // arr2[i] onto the result array
  // create the new tree with the result array

  if (!t1 && !t2) return null;
  if (!t1) return t2;
  if (!t2) return t1;
  else node = TreeNode(t1.val + t2.val);
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
