// /**
//  * Jaba chai hami lai tha hudaina ki kati samma loop janxa
//  *
//  * while loop
//  */

// /**
//  * Odd numbers to number 10
//  */

// // for (let i = 0; i <= 10; i++) {
// //   const isOdd = i % 2 !== 0;

// //   if (isOdd) {
// //     console.log(i);
// //   }
// // }

// let i = 0;
// while (i <= 10) {
//   const isOdd = i % 2 !== 0;

//   if (isOdd) {
//     console.log(i);
//   }

//   i++;
// }

// /**
//  * 10 odd numbers
//  */

// let count = 0;
// let j = 0;

// while (count <= 10) {
//   const isOdd = j % 2 !== 0;
//   if (isOdd) {
//     console.log(j);
//     count++;
//   }

//   j++;
// }

// function primeCheck(checkPrime) {
//   let isPrime = true;

//   for (let i = 2; i < checkPrime; i++) {
//     if (checkPrime % i === 0) {
//       isPrime = false;
//     }
//   }

//   if (isPrime) {
//     console.log(checkPrime + " is a prime");
//   } else {
//     console.log(checkPrime + " is not prime");
//   }

//   return isPrime;
// }

// // function sum(a, b) {
// //   const sumVal = a + b;

// //   return sumVal;
// // }

// // let sumVal = sum(1, 2);

// for (let i = 1; i <= 10; i++) {
//   const isPrime = primeCheck(i);
// }

// let count = 0;

// let i = 1;

// while (count <= 10) {
//   const isPrime = primeCheck(i);

//   if (isPrime) {
//     count++;
//   }

//   i++;
// }

// let count = 0;
// let first = 0;
// let second = 1;

// console.log("Fibonacci Sequence");
// console.log(second);
// while (count < 20) {
//   let sum = first + second;
//   first = second;
//   second = sum;
//   console.log(sum);
//   count++;
// }

