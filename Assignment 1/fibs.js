#!/usr/bin/node

const fibs = (num) => {
  let fibs = [0, 1];

  for (var i = 0; i < num - 2; i++) {
    fibs.push(fibs[i] + fibs[i + 1]);
  }

  return fibs;
};

const args = process.argv.slice(2);
console.log(fibs(args[0]));
