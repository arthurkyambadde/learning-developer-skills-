// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log();
console.log();

// given an array of temperatures of one day, calculate the temperature amplitude. keep in mind sometimes there might be an error.

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1 understand the problem
// difference btn highest and lowest temp
// how to compute max and min temp?
// whats a sensor error?

// 2 breakdown problem into sub-problems
// how to ignore errors
// find max and min values in an array
// subtract min from max and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
};

calcTempAmplitude([1, 20, 501, 15, 10, "boy", 33, 400, 0, -20, 7]);
