const flatten = arr => [].concat(...arr);

flatten([1, [2], 3, 4]); // [1,2,3,4]
