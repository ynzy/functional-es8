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
 * 遍历数组产生新数组
 * @param {*} array 
 * @param {*} fn 
 * @returns 
 */
export const map = (array, fn) => {
  let result = [];
  for (const value of array) {
    result.push(fn(value))
  }
  return result
};

/**
 * 遍历数组过滤产生新数组
 * @param {*} array 
 * @param {*} fn 
 * @returns 
 */
export const filter = (array, fn) => {
  let result = [];
  for (const value of array) {
    if (fn(value)) {
      result.push(value)
    }
  }
  return result
};

/**
 * 把嵌套数组连接到一个数组中
 * @param {*} array 
 * @returns 
 */
export const concatAll = (array) =>{
  let results = []
  for (const value of array) {
    results.push.apply(results, value)
  }
  return results
}

/**
 * 累加器
 * @param {*} array 
 * @param {*} fn 
 * @param {*} initialValue 
 * @returns 
 */
export const reduce = (array, fn, initialValue) => {
  // 累加器的值
  let accumulator;
  // 如果没有传递初始值，则将数组的第一位元素作为累加器的值
  if(initialValue != undefined) {
    accumulator = initialValue
  } else {
    accumulator = array[0]
  }
  // 如果initialValue未定义，则从第二个元素开始遍历
  if(initialValue === undefined) {
    for (let i = 1; i < array.length; i++) {
      accumulator = fn(accumulator, array[i])
    }
  }else {
    for (const value of array) {
      accumulator = fn(accumulator, value)
    }
  }
  return [accumulator]
} 

/**
 * 合并两个给定的数组
 * @param {*} leftArr 
 * @param {*} rightArr 
 * @param {*} fn 
 * @returns 
 */
export const zip = (leftArr,rightArr,fn) => {
  let results = []
  for (let index = 0; index < Math.min(leftArr.length,rightArr.length); index++) {
    results.push(fn(leftArr[index],rightArr[index]))
  }
  return results
}