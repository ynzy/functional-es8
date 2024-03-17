import { curry, partial } from "../lib/curry.mjs"

const add = (a,b) => a + b

let autoCurriedAdd = curry(add)
const res = autoCurriedAdd(2)(2)
console.log(res);

const multiply = (x,y,z) => x * y * z

const autoCurriedMultiply = curry(multiply)
const res2 = autoCurriedMultiply(1)(2)(3)
console.log(res2);



const loggerHelper = (mode,initialMessage,errorMessage,lineNo) => {
  if(mode === "DEBUG")
    console.debug(initialMessage,errorMessage + "at line: " + lineNo)
  else if(mode === "ERROR")
    console.error(initialMessage,errorMessage + "at line: " + lineNo)
  else if(mode === "WARN")
    console.warn(initialMessage,errorMessage + "at line: " + lineNo)
  else 
    throw "Wrong mode"
}

let errorLogger = curry(loggerHelper)("ERROR")("Error At Stats.js");
let debugLogger = curry(loggerHelper)("DEBUG")("Debug At Stats.js");
let warnLogger = curry(loggerHelper)("WARN")("Warn At Stats.js");


//for error
errorLogger("Error message",21)

//for debug
debugLogger("Debug message",233)

//for warn
warnLogger("Warn message",34)


/**
 * 字符串数组中，查找含有数字的数组内容
 */
let match = curry(function(expr,str){
  return str.match(expr)
})

let hasNumber = match(/[0-9]+/);

let filter = curry(function(f,ary){
  return ary.filter(f)
})

let findNumbersInArray = filter(hasNumber)

const res3 = findNumbersInArray(['js','bym234','number1'])
console.log(res3);

// 求数组的平方

const arrMap = curry(function(f,ary){
  return ary.map(f)
})

const squareAll = arrMap((x) => x * x)

const res4 = squareAll([1,2,3])
console.log(res4);

let delayTenMs = partial(setTimeout,undefined,10)
delayTenMs(()=>console.log('hello world'))

let prettyPrintJson = partial(JSON.stringify,undefined,null,2)
console.log("JSON pretty print via partial",prettyPrintJson({foo: "bar", bar: "foo"}))
console.log("JSON pretty print via partial",prettyPrintJson({name: "2323", dfdf: "f44oo"}))