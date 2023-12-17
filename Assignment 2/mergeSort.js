#!/usr/bin/node

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

// One Example
console.log(
  mergeSort([
    4, 10, 3, 9, 5, 7, 99, 6, 8, 95, 754, 8, 5, 883, 568, 39, 98, 4552, 157,
    839, 86, 5214578,
  ])
);
