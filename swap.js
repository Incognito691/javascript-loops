// const arr = [1, 2];

// const temp = arr[0]; // 1
// arr[0] = arr[1]; // [2, 2]
// arr[1] = temp; // [2, 1]

// console.log(arr);

// const arr = [5, 4, 3, 2, 1];

// Output:- [4,3,2,1,5]
// Output:- [1, 2, 3, 4, 5]

// let temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// temp = arr[1];
// arr[1] = arr[2];
// arr[2] = temp;

// temp = arr[2];
// arr[2] = arr[3];
// arr[3] = temp;

// temp = arr[3];
// arr[3] = arr[4];
// arr[4] = temp;

// console.log(arr);

// //loop
// const arr = [5, 3, 2, 4, 0];

// for (i = 0; i < arr.length - 1; i++) {
//   let temp = arr[i];
//   arr[i] = arr[i + 1];
//   arr[i + 1] = temp;
// }

// console.log(arr); // [4, 3, 2, 1, 5]

const newArr = ["Z", "a", "W", "q", "D"];

for (let j = 0; j < newArr.length - 1; j++) {
  for (i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      let temp = newArr[i];
      newArr[i] = newArr[i + 1];
      newArr[i + 1] = temp;
    }
  }
}

console.log(newArr);
