// Problem #1

// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add
// up to target. You may assume that each input would have
// exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// this is not the right way to solive using this brute force iteration
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log([i, j]);
//         return [i, j];
//       }
//     }
//   }
// };

// const twoSum = function (nums, target) {
//   let numObj = {};
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (numObj[complement] !== undefined) {
//       console.log([numObj[complement], i]);
//       return [numObj[complement], i];
//     }
//     numObj[nums[i]] = i;
//   }
// };

// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 3], 6);
// twoSum([3, 2, 4], 6);

// class Animal {
//   static belly = [];
//   eat() {
//     Animal.belly.push("food");
//   }
// }

// let a = new Animal();
// a.eat();

// console.log(a);

// const numbers = [1, 2, 3, 4, 5];

// const [one, two, three, four, five] = numbers;
// console.log(one, two, three, four, five);

// let v1 = 2;
// let v2 = 4;

// v1 *= v1 + (v2 * v2) / v1;
// console.log(v1);

// function printA() {
//   console.log(answer);
//   var answer = 1;
// }

// printA();
// printA();

// var a = ["dog", "cat", "hen"];

// a[100] = "fox";
// console.log(a.length);

// class RainForest {
//   static minimumRainFall = 60;
// }

// let congo = new RainForest();

// RainForest.minimumRainFall = 80;
// console.log(congo.minimumRainFall);

// let animals = ["jaguar", "eagle"];

// console.log(animals.pop());

// localStorage.setItem("animal", "sloth");

// let cat = { type: "tiger", size: "large" };

// console.log("i");

// setTimeout(() => {
//   console.log("love");
// }, 0);

// console.log("js");

// let a = [{type: 'lion'}, "tiger"]
// let clones = animals.slice();

// console.log(animals[0].type, clones[0].type);

// var obj;
// console.log(obj);
console.log(arguments);
