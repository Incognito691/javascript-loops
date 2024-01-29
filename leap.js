let yeartocheck = 2000;

if (yeartocheck % 4 === 0 && yeartocheck % 100 !== 0) {
  console.log(yeartocheck + "is a leap year");
} else if (yeartocheck % 400 === 0) {
  console.log(yeartocheck + "is a leap year");
} else {
  console.log(yeartocheck + "is not a leap year");
}

if (yeartocheck % 4 === 0) {
  if (yeartocheck % 100 === 0) {
    if (yeartocheck % 400 === 0) {
      console.log("Leap year");
    } else {
      console.log("Not a leap year");
    }
  } else {
    console.log("Leap year");
  }
} else {
  console.log("Not leap year");
}

/**
 *
 * 'a' + 'a' = 'aa'
 * 15
 *
 * 3 and 5 - fizzbuzz
 * 3 - fizz
 * 5 - buzz
 */

/**
 * suru ma take a year to check
 * check the year is divisible by 4 and not divisible by 100 : display 'LEAP YEAR'
 * check the year is divisoble by 400 : display 'LEAP YEAR'
 * else : display 'NOT LEAP YEAR'
 */

let a = 35;

if (a % 3 === 0 && a % 7 === 0 && a % 5 === 0) {
  console.log("FizzBuzzCoke");
} else if (a % 3 === 0 && a % 5 === 0) {
  console.log("FizzBuzz");
} else if (a % 3 === 0) {
  console.log("Fizz");
} else if (a % 5 === 0) {
  console.log("Buzz");
}

// let toCheck = 15;
// let output = "";

// if (toCheck % 3 === 0) {
//   output = output + "fizz";
// }

// if (toCheck % 5 === 0) {
//   output = output + "buzz";
// }

// console.log(output);
