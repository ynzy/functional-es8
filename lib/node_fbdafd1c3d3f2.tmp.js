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

export const concatAll = (array,fn) =>{
  
}