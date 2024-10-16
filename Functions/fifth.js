// function Myfunction(){
//     console.log("Hi I am Prasanth");
//     console.log("Learning functions");
// }
//     Myfunction();
  
// function Myfunction1(msg){
//     console.log(msg);
// }
//     Myfunction1("I Love JS");

//function -> sum of 2 numbers

// function sum (x,y){
//     s = x + y;
//     return s;
// }

// let val = sum(3,4);
// console.log(val);

//count vowels from a string

// function CountVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//             char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// //count vowels from a string using arrow functions

// const CountVowels = str =>{
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//             char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//             count++;
//         }
//     }
//     console.log(count);
// };


//for each loop in Arrays (only useed for arrays!)

//arr.forEach(callback function) arrow function:

// arr = ["pune","goa","mumbai"];
// arr.forEach((val)=>{
//     console.log(val);
//     console.log(val.toUpperCase());
// });

// for a given array of numbers print the square of each number using the forEach loop

// arr = [2,4,6,8,10];
// arr.forEach((val) => {
//     console.log(val*val); // val**2
// });

// some more array methods:
// 1) Map: creates a new array with the results of some operations returned.
// let nums = [20,30,40];
// let newArr = nums.map((val) =>{
// //  return val * 2;
// //  return val ** 2;
// //  return val + 5;
// });
// console.log(newArr);

// 2) Filter: creates a new array of elements that give true for a condition/filter.
// let nums = [257,3876,4680];
// let newArr = nums.map((val) =>{
//      return val % 2 === 0; 
//     });
//     console.log(newArr);

//3) Reduce: performs some operation &reduces the arr to a single value.it returns that single value.
// a) Find the sum of the elements of the array.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// const output = arr.reduce((res,curr)=>{
//           return res + curr;
// }); 
// console.log(output);

// b) Find the largest number of the array.
// let arr = [1,2,5,78,45,7,3];
// const output = arr.reduce((prev,curr) =>{
//     return prev > curr ? prev : curr;
// });
// console.log(output);

//we are given a array of marks of students filter out the marks of students that scored 90+:
// let marks = [45,62,91,84,97];
// let newArr = marks.filter((val) => {
//       return val > 90;
// });
// console.log(newArr);

// use the reduce method to calculate sum of the elements of an array 
// let nums = [1,2,3,4,5,6];
// const output = nums.reduce((prev,curr)=>{
//     return prev + curr;
// });
// console.log(output);//21

// use the reduce method to calculate product/factorial of the elements of an array 
// let nums = [1,2,3,4,5,6];
// const output = nums.reduce((prev,curr)=>{
//     return prev * curr;
// });
// console.log(output); //720
