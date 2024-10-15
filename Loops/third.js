//For loops
// Print Jai shree ram for 5 times 
// for (let count = 1;count <= 5;count++){
//     console.log("Jai Shree Ram !");
// }

// Print 1 to 5 
// for (let count =1;count <=5;count ++){
//     console.log(count);
// }

//Calculate sum of 1 to 5
// let sum = 0
// for(let count= 1; count<=5;count++){
//     sum = sum + count ;
// }
// console.log("sum is:",sum)

//Calculate sum of 1 to n using prompt
// let sum = 0
// let n = prompt("n");
// for(let count= 1; count<=n;count++){
//     sum = sum + count ;
// }
// console.log("sum is:",sum)

//While loops
//Print 1 to 5 using while loop
// let i = 1;
// while(i<= 10){
//     console.log("i = ",i);
//     i++;
// }

//do-while loops
//Print 1 to 5 using do-while loop
// let i = 1;
// do {
//     console.log("i = ",i);
//     i++;
// }while(i<= 5);

//for-of loops
//Print values of string using for-of loop
// let str = "Sai Prasanth";
// for(let i of str){
//     console.log("i=",i);
// }

//Print size of string using for-of loop
// let str = "SaiPrasanth";
// let size = 0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size =",size);

//for-in loops
//Print key value pairs using for in-loops
// let student ={
//     name : "Prasanth",
//     age  : 19,
//     cgpa : 7.9,   
// };
// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }

//Print 0 t0 100 even numbers 
// let i = 0;
// for(let i=0;i<=100;i++){
//     if(i%2 == 0){
//         console.log(i,"is even");
//     }
// }
// console.log("Loop has ended !");

//create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value 
// let gameNum = 14;
// let YourNum = prompt("Guess The Game Number :");

// //using condtional statements:
// // if (gameNum==YourNum){
// //     console.log("You guessed correct !");
// // }else{
// //     console.log("sorry ! have another try !");
// // }

// //using loops:
// while(gameNum != YourNum){
//     YourNum = prompt("Wrong Number! Guess The Game Number Again :");
// }
// console.log("You guessed correct !");

//Strings 
// let str1 = "    Special String    ";
// let str2 = "kp";
// let res = str1.concat(str2);
// console.log(res);
// console.log(str1.slice(1,4));
// console.log(str1.replace("p","t"));
// console.log(str1.charAt(1));
// console.log(str1.length);
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str1.trim());


// let name = prompt("fullname");
// username = "@" + name + name.length;
// console.log(username);
