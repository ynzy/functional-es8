/**
 *  柯里化：把二元函数，转换为含有嵌套的一元函数，每个函数值接收一个参数
 * @param {*} fn 
 * @returns 
 */
export const curry =(fn) => {
  if(typeof fn!=='function'){
      throw Error('No function provided');
  }

  return function curriedFn(...args){
    
    // 如果传入的参数小雨函数参数的长度，继续拼接参数并进行返回，
    // 直到函数需要的参数个数相等，就直接调用函数
    if(args.length < fn.length){
      return function(...newArgs){
        return curriedFn.apply(null, args.concat(newArgs));
      };
    }
    //make it bold

    return fn.apply(null, args);
  };
};
// export const curry = (binaryFn) => {
//   return function(firstArg) {
//     return function(secondArg) {
//       return binaryFn(firstArg, secondArg)
//     }
//   }
// }
/**
 * 偏函数：固定一个或多个函数参数的过程，从而创建一个新的函数，这个新函数接受剩余的参数
 * @param {*} fn 
 * @param  {...any}  partialArgs
 * @returns 
 */
export const partial = function (fn,...partialArgs){
  let args = partialArgs.slice(0);
  return function(...fullArguments) {
    let arg = 0;
    for (let i = 0; i < args.length && arg < fullArguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = fullArguments[arg++];
        }
      }
      return fn.apply(this, args);
  };
};

// export function partial(fn, ...args) {  
//   return function(...newArgs) {  
//     return fn(...args, ...newArgs);  
//   };  
// }