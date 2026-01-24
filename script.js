// let num = 10;

// for (let i = 0; i <= num; i++) {
//   console.log(i);
// }

//******************************************

// let num = prompt("Enter a number")
// for(let i=1; i<=Number(num);i++){
// console.log(i)
// }

//******************************************

// const input = document.querySelector(".input");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   for (let i = 1; i <= (input.value); i++) {
//     console.log(i)
//   }
// });

//******************************************

// let num = 10;

// for (let i = 0; i <= num; i++) {
//   console.log(num-i);
// }

//******************************************

// let num = 10;

// for (let i = 0; i <= num; i = i + 2) {
//   console.log(i);
// }

//******************************************

// Brute force Solution. It takes more time to perform when we increase the value of num.
// console.time()

// let num = 10;

// let result = 0;

// for (let i = 0; i <= num; i++) {
//   result += i;
// }

// console.log(result)
// console.timeEnd()

//******************************************

// Optimized Solution

// let num = 10;

// const result = (num * (num + 1)) / 2;

// console.log(result);

//******************************************

// let num = 5;

// let result = 1;

// for (let i = 5; i >= 1; i--) {
//   result = result * i;
// }

// console.log(result);

// let num = 5;

// let result = 1;

// for (let i = 1; i <= num; i++) {
//   result = result * i;
// }

// console.log(result);

//*****************************************

// let num = 10;

// let result = 0;

// for (let i = 0; i <= num; i += 2) {
//   result += i;
// }

// console.log(result)

// let num = 15;

// let result = 0;

// for (let i = 0; i <= num; i++) {
//   if (i % 2 === 0) {
//     result += i;
//   }
// }

// console.log(result);

// let num = 10

// let result = num/2*(num/2+1)
// console.log(result)

//*****************************************

// const num = 5

// for(let i=1; i<=5;i++){
// // console.log(Math.pow(i,2))
// console.log(i**2)
// }

//*****************************************

// HomeWork

// Print numbers divisible by 3 and 5 upto N.

// const num = 30;

// for (let i = 1; i <= num; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// const num = 30;

// for (let i = 1; i <= num; i++) {
//   if (i % 15 === 0) {
//     console.log(i);
//   }
// }

// Print numbers divisible by 7 and 3 upto N.
// const num = 60;

// for (let i = 1; i <= num; i++) {
//   if (i %21 === 0) {
//     console.log(i);
//   }
// }

//*****************************************

// Print the sum all odd Numbers upto n

// const num = 10;

// let result = 0;

// for (let i = 0; i <= num; i++) {
//   if (i % 2 === 1) {
//     result += i;
//   }
// }

// console.log(result);

// const num = 14;

// let result = 0;

// for (let i = 1; i <= num; i += 2) {
//   result += i;
// }

// console.log(result);

// const num = 10;

// let result = num/2*(num/2)

// console.log(result);

// const num = 11;

// let k = Math.ceil(11 / 2);

// const result = k * k;
// console.log(result);

//*****************************************

// Print the cubes number from 1 to N

// let num = 10;

// for (let i = 1; i <= num; i++) {
//   // console.log(i*i*i);
//   // console.log(i**3);
//   console.log(Math.pow(i, 3));
// }

// let num = 10;

// for (let i = num; i >= 1; i--) {
//   // console.log(i*i*i);
//   // console.log(i**3);
//   console.log(Math.pow(i, 3));
// }

//*****************************************

// Print only the numbers that are both even and perfect Square

let num = 100;

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0 && Math.sqrt(i) % 2 === 0) {
    console.log(i);
  }
}
