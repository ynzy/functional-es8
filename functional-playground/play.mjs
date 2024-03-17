import {
  every,
  forEach,
  forEachObject,
  memoized,
  objectAssign,
  once,
  some,
  sortBy,
  tap,
  times,
  unary,
  unless,
} from "../lib/es8-functional.mjs";

// forEach([1, 2, 3], (item) => {
//   console.log(item * 2);
// });

// const object = { a: 1, b: 2 };
// forEachObject(object, (k, v) => {
//   console.log(`${k}:${v}`);
// });

// forEach([1, 2, 3, 4, 5, 6, 7], (number) => {
//   // 判断是否是偶数
//   unless(number % 2 === 0, () => {
//     console.log(number, "is even");
//   });
// });

// times(100, (number) => {
//   unless(number % 2 === 0, () => {
//     console.log(number, "is even");
//   });
// });

// times(100, (number) => {
//   unless(number % 2 === 0, () => {
//     console.log(number, "is even");
//   });
// });

// const res = every([NaN, NaN, NaN], isNaN);
// console.log(res);
// const res1 = every([NaN, 2, NaN], isNaN);
// console.log(res1);

// const res2 = some([NaN, NaN, NaN], isNaN);
// console.log(res2);
// const res3 = some([1, 2, 2], isNaN);
// console.log(res3);

// var people = [
//   { firstname: "aaFirstName", lastname: "cclastName" },
//   { firstname: "ccFirstName", lastname: "aalastName" },
//   { firstname: "bbFirstName", lastname: "bblastName" },
// ];

// //sorting with respect to firstname
// console.log(
//   "FirstName sort manually",
//   people.sort((a, b) => {
//     return a.firstname < b.firstname ? -1 : a.firstname > b.firstname ? 1 : 0;
//   })
// );

// //sorting with respect to lastname
// console.log(
//   "LastName sort manually",
//   people.sort((a, b) => {
//     return a.lastname < b.lastname ? -1 : a.lastname > b.lastname ? 1 : 0;
//   })
// );

// //sorting with respect to firstname using sortBy
// console.log("Firstname using sortBy hoc", people.sort(sortBy("firstname")));

// //sorting with respect to firstname using sortBy
// console.log("lastName using sortBy hoc", people.sort(sortBy("lastname")));

tap("fun")((it) => {
  console.log("value is", it);
});

forEach([1, 2, 3], (item) => {
  tap(item)(() => {
    console.log(item);
  });
});

const res = ["1", "2", "3"].map(unary(parseInt));
console.log(res);

const dopayment = once(() => {
  console.log("payment is done");
});
dopayment();
console.log(dopayment());

//slow factorial
var factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  // This is it! Recursion!!
  return n * factorial(n - 1);
};

console.log("Factorial of 2 is", factorial(2));
console.log("Factorial of 3 is", factorial(3));
console.time("Factorial");
console.log("Factorial of 7 is", factorial(7));
console.timeEnd("Factorial");

//memoized factorial
let fastFactorial = memoized((n) => {
  if (n === 0) {
    return 1;
  }

  // This is it! Recursion!!
  return n * fastFactorial(n - 1);
});

console.log("Fast Factorial of 2 is", fastFactorial(2));
console.log("Fast Factorial of 3 is", fastFactorial(3));
console.time("Fast Factorial");
console.log("Fast Factorial of 7 is", fastFactorial(7));
console.timeEnd("Fast Factorial");

var a = {name: '123'}
var b = {age: 30}
var c = {sex: 'M'}
var customObjectAssign = objectAssign(a,b,c)
console.log(customObjectAssign);