/**
 * Jaba hami lai tha hunxa kati samma loop jane vanera
 * For loop
 *
 * for(start assignment; continue hune condition; assignment increment){
 *  // K k kaam garne rakhne
 * }
 */

/**
 * We have to loop for 10 times
 */

// let count = 0;

// for (let i = 1; i <= 11; i++) {
//   count++;
// }

// console.log(count);

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i); // Gives the index of the array

//   console.log(arr[i]); // To access array
// }

// for (let i in arr) {
//   console.log(i); // Gives the index of the array
// }

// for (let i of arr) {
//   console.log(i); // Array ko value dinxa
// }

// 1,1,2,3,5,8,13:20
// upto number 20

let count = 0;
let start_num = 1;

console.log(start_num);
for (i = 0; i < 7; i++) {
  var sum = count + start_num;
  count = start_num;
  start_num = sum;
  console.log(sum);
}
