// MASALALAR V-2

//3-masala

// function func(n) {
//   let sum = 0;
//   for (let i = 1; i <= 2 * n; i++) {
//     sum += i ** 2;
//   }
//   return sum;
// }
// let n = 10;
// let result = func(n);
// console.log(result);

// 4-masala

// let people = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// let result = {};
// for (let i = 0; i < people.length; i++) {
//   let a = people[i];
//   let sum = people[i].length;
//   result[a] = sum;
// }
// console.log(result);

//5-masala

// let n = 3;
// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };

// function getMultipleValues(n) {
//   let result1 = a * n;
//   let result2 = b * n;
//   let result3 = c * n;
//   let result4 = d * n;
// }

// let result = {
//   result1,
//   result2,
//   result3,
//   result4,
// };
// console.log(result);

//6-masala

// function getElementsOneTime(arr) {
//   let n = {};
//   let result = [];

//   arr.forEach((element) => {
//     if (!n[element]) {
//       n[element] = 1;
//     } else {
//       n[element]++;
//     }
//   });

//   arr.forEach((element) => {
//     if (n[element] === 1) {
//       result.push(element);
//     }
//   });

//   return result;
// }

// const inputArray = [1, 3, 9, 1, 5, 9, 2];
// console.log(getElementsOneTime(inputArray));

//7-masala

// const text = "Men Abdulaziz Programmerman".split(" ").some(() => {
//   " ";
// });

// console.log(text);

//8-masala

// const pupils = [
//   { name: "Elbek", percent: 95 },
//   { name: "Zafar", percent: 78 },
//   { name: "Aziz", percent: 83 },
//   { name: "Jasur", percent: 88 },
//   { name: "Bobur", percent: 66 },
//   { name: "Kamron", percent: 75 },
// ];
// const ball = pupils.reduce((count, pupil) => {
//   if (pupil.percent >= 70) {
//     return count + 1;
//   } else {
//     return count;
//   }
// }, 0);
// const _ = pupils.length - ball;
// console.log("imtixondan o'tganlar soni:", ball + " ta");
// console.log("imtixondan o'ta olmaganlar soni:", _ + " ta");

//9-masala

// let numbers = [3, 3, 5, 7, 5, 7, 9, 2, 5, 5];

// function n(arr) {
//   return arr.reduce((acc, curVal) => {
//     if (acc.indexOf(curVal) === -1) {
//       acc.push(curVal);
//     }
//     return acc;
//   }, []);
// }
// let result = n(numbers);
// console.log(result);

// 10-masala

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const animalss = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});
// console.log(animalss);
