const indexOfAll = (arr, val) => {
  const indices = [];
  arr.forEach((el, i) => el === val && indices.push(i));
  return indices;
};

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
