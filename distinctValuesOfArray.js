const distinctValuesOfArray = arr => [...new Set(arr)];

distinctValuesOfArray([1, 2, 2, 3, 4, 4, 5]); // [1,2,3,4,5]
