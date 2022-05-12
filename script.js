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
  console.log(max, min);

  return max - min;
};

const amplitude = calcTempAmplitude(temperature);

console.log(amplitude);

calcTempAmplitude([2, 5, 8, 9, 4, 99, -20]);

console.log(amplitude);

// function should receive two arrays
// how to merge arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitudenew = calcTempAmplitudeNew([1, 3, 6], [4, 7, 9, 2]);

console.log(amplitudenew);

//learning  debugging
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // fix bug
    //typeof value must be a value
    // value: prompt("Degrees celsius:"),
    value: Number(prompt("Degrees celsius:")),
  };

  // find bug
  console.table(measurement);
  console.log(typeof measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
