/**
 * 遍历数组
 * @param {*} array
 * @param {*} fn
 */
export const forEach = (array, fn) => {
  let i;
  for (i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};

/**
 * 遍历对象
 * @param {*} obj
 * @param {*} fn
 */
export const forEachObject = (obj, fn) => {
  for (let property in obj) {
    // 以key和value作为参数调用fn
    fn(property, obj[property]);
  }
};

/**
 * 断言
 * @param {boolean} predicate 如果为false，这执行函数
 * @param {*} fn
 */
export const unless = (predicate, fn) => {
  if (!predicate) {
    fn();
  }
};

/**
 * 接收一个数字，根据提供的次数调用传入的函数
 * @param {*} times
 * @param {*} fn
 */
export const times = (times, fn) => {
  for (let i = 0; i < times; i++) {
    fn(i);
  }
};

/*
ES5 implementation
const every = (arr,fn) => {
    let result = true;
    for(let i=0;i<arr.length;i++)
       result = result && fn(arr[i])
    return result
}
*/

/**
 * 检查数组中所有元素是否都满足条件
 * @param {*} arr
 * @param {*} fn
 * @returns
 */
export const every = (arr, fn) => {
  let result = true;
  for (const value of arr) {
    result = result && fn(value);
  }
  return result;
};

/**
 * 检查数组中所有元素是否有满足条件的
 * @param {*} arr
 * @param {*} fn
 * @returns
 */
export const some = (arr, fn) => {
  let result = false;
  for (const value of arr) {
    result = result || fn(value);
  }
  return result;
};

/**
 * 根据属性对对象数组进行排序
 * @param {*} property
 * @returns
 */
export const sortBy = (property) => {
  return (a, b) => {
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result;
  };
};

/**
 * 接收一个value，并返回一个包含value的闭包函数
 * @param {*} value
 * @returns
 */
export const tap = (value) => {
  return (fn) => {
    typeof fn === "function" && fn(value);
    console.log(value);
    // return value
  };
};

/**
 * 给定一个多参数的函数，转换为只接收一个参数的函数
 * @param {*} fn
 * @returns
 */
export const unary = (fn) => {
  // 如果函数只有一个参数，直接返回函数，否则返回一个函数，该函数只接收一个参数
  return fn.length === 1 ? fn : (arg) => fn(arg);
};

/**
 * 对于给定函数，只运行一次
 * @param {*} fn
 * @returns
 */
export const once = (fn) => {
  let done = false;
  return function () {
    // 如果done为true，直接返回undefined，否则将done设置为true，并执行fn
    return done ? undefined : ((done = true), fn.apply(this, arguments));
  };
};

/**
 * 缓存计算结果
 * @param {*} fn
 * @returns
 */
export const memoized = (fn) => {
  const cache = {};
  return (arg) => {
    if (cache[arg]) {
      return cache[arg];
    } else {
      return (cache[arg] = fn(arg));
    }
  };
};

/**
 * 合并所有对象来创建一个新对象
 * @param  {...any} sources 
 * @returns 
 */
export const objectAssign = (...sources) => {
  const target = {};
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      target[key] = source[key];
    });
  });
  return target;
};


// function objectAssign(target, source) {
//   var to = {};
//   for (var i = 0; i < arguments.length; i += 1) {
//     var from = arguments[i];
//     var keys = Object.keys(from);
//     for (var j = 0; j < keys.length; j += 1) {
//       to[keys[j]] = from[keys[j]];
//     }
//   }
//   return to;
// }
