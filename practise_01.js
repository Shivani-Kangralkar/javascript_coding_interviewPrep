// Q1 find longest word in string
// const longestWord = (str) => {
//   if (str.trim().length === 0) {
//     return false;
//   }
//   const word = str.split(" ");

//   const value = word.sort((a, b) => b.length - a.length);
//   return value[0];
// };
// console.log(longestWord("My name is shivani"));

// --------------------------------------------------------------------------------------------------------

// Q2 Check how many times character is been count
// const charCount = (str, char) => {
//   const valueStr = str.toLowerCase();
//   const charStr = char.toLowerCase();
//   const result = valueStr.split("");
//   const word = result.reduce((acc, curr) => {
//     if (curr === charStr) {
//       acc++;
//     }
//     return acc;
//   }, 0);
//   return word;
// };
// console.log(charCount("MissIssippi", "I"));

// --------------------------------------------------------------------------------------------------------

// Q3

// function outer() {
//   for (var i = 0; i < 5; i++) {
//     function inner(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     inner(i);
//   }
// }
// outer();

// --------------------------------------------------------------------------------------------------------
// Q4 Remove duplicate email from array of objects

// let arr = [
//   {
//     name: "shivani",
//     email: "shivani1@",
//   },
//   {
//     name: "neha",
//     email: "neha2@",
//   },
//   {
//     name: "pk",
//     email: "shivani1@",
//   },
// ];

// const setCreated = new Set(arr);
// const value = arr.filter((obj) => {
//   const data = setCreated.has(obj.email);
//   setCreated.add(obj.email);
//   return !data;
// });
// console.log("value", value);

// -------------------------------------------------------------------------------------

