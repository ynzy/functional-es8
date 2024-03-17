

import * as arrayUtils from "../lib/arrayUtils.mjs";
import { concatAll, map } from "../lib/arrayUtils.mjs";

// arrayUtils.map([1,2,3],(v)=>{
//   console.log(v);
// })

// let apressBooks = [
//   {
//     "id": 111,
//     "title": "C# 6.0",
//     "author": "ANDREW TROELSEN",
//     "rating": [4.7],
//     "reviews": [{good : 4 , excellent : 12}]
//   },
//   {
//     "id": 222,
//     "title": "Efficient Learning Machines",
//     "author": "Rahul Khanna",
//     "rating": [4.5],
//     "reviews": []
//   },
//   {
//     "id": 333,
//     "title": "Pro AngularJS",
//     "author": "Adam Freeman",
//     "rating": [4.0],
//     "reviews": []
//   },
//   {
//     "id": 444,
//     "title": "Pro ASP.NET",
//     "author": "Adam Freeman",
//     "rating": [4.2],
//     "reviews": [{good : 14 , excellent : 12}]
//   }
// ];

// // 转换数据，只包含title和author字段

// var res = arrayUtils.map(apressBooks,(book)=>{
//   return {
//     title: book.title,
//     author: book.author
//   }
// })

// console.log(res);

// // 获取评分高于4.5的图书列表
// var res2 = arrayUtils.filter(apressBooks,(book)=>{
//   return book.rating[0] > 4.5
// })
// console.log(res2);

// // 获取含有title和author对象且评分高于4.5对象
// var res3 = arrayUtils.map(arrayUtils.filter(apressBooks,(book)=>book.rating[0]>4.5),(book)=>{
//   return {
//     title: book.title,
//     author: book.author
//   }
// })
// console.log(res3);

// let apressBooks2 = [
//   {
//     name : "beginners",
//     bookDetails : [
//       {
//         "id": 111,
//         "title": "C# 6.0",
//         "author": "ANDREW TROELSEN",
//         "rating": [4.7],
//         "reviews": [{good : 4 , excellent : 12}]
//       },
//       {
//         "id": 222,
//         "title": "Efficient Learning Machines",
//         "author": "Rahul Khanna",
//         "rating": [4.5],
//         "reviews": []
//       }
//     ]
//   },
//   {
//       name : "pro",
//       bookDetails : [
//       {
//         "id": 333,
//         "title": "Pro AngularJS",
//         "author": "Adam Freeman",
//         "rating": [4.0],
//         "reviews": []
//       },
//       {
//         "id": 444,
//         "title": "Pro ASP.NET",
//         "author": "Adam Freeman",
//         "rating": [4.2],
//         "reviews": [{good : 14 , excellent : 12}]
//       }
//     ]
//   }
// ];

// var res4 = arrayUtils.concatAll(arrayUtils.map(apressBooks2,(book)=>book.bookDetails))
// console.log(res4);

// const goodRatingCriteria = (book) => book.rating[0] > 4.5

// var res5 = arrayUtils.filter(arrayUtils.concatAll(arrayUtils.map(apressBooks2,(book)=>book.bookDetails)),goodRatingCriteria)
// console.log('res5',res5);

// let useless = [2,5,6,1,10]
// const res6 = arrayUtils.reduce(useless,(acc,curr)=>{
//   console.log(acc,curr);
//   return acc * curr
// },1)

// console.log(res6);

// // 统计good和excellent评价的数量
// const bookDetails = arrayUtils.concatAll(arrayUtils.map(apressBooks2,(book)=>book.bookDetails))

// var res7 = arrayUtils.reduce(bookDetails,(acc,bookDetail)=>{
//   let goodReviews = bookDetail.reviews[0] != undefined ? bookDetail.reviews[0].good : 0
//   let excellentReviews = bookDetail.reviews[0] != undefined ? bookDetail.reviews[0].excellent : 0
//   return {
//     good: acc.good + goodReviews,
//     excellent: acc.excellent + excellentReviews
//   }
// },{good:0,excellent:0})
// console.log('res7',res7);


let apressBooks3 = [
  {
    name : "beginners",
    bookDetails : [
      {
        "id": 111,
        "title": "C# 6.0",
        "author": "ANDREW TROELSEN",
        "rating": [4.7]
      },
      {
        "id": 222,
        "title": "Efficient Learning Machines",
        "author": "Rahul Khanna",
        "rating": [4.5],
        "reviews": []
      }
    ]
  },
  {
      name : "pro",
      bookDetails : [
      {
        "id": 333,
        "title": "Pro AngularJS",
        "author": "Adam Freeman",
        "rating": [4.0],
        "reviews": []
      },
      {
        "id": 444,
        "title": "Pro ASP.NET",
        "author": "Adam Freeman",
        "rating": [4.2]
      }
    ]
  }
];

let reviewDetails = [
  {
    "id": 111,
    "reviews": [{good : 4 , excellent : 12}]
  },
  {
    "id" : 222,
    "reviews" : []
  },
  {
    "id" : 333,
    "reviews" : []
  },
  {
    "id" : 444,
    "reviews": [{good : 14 , excellent : 12}]
  }
]

const res8 = arrayUtils.zip([1,2,3],[4,5,6],(x,y)=>x+y)
console.log(res8);

let bookDetails3 = concatAll(
  map(apressBooks3,(book) => {
    return book.bookDetails
  })
)
const mergedBookDetails = arrayUtils.zip(bookDetails3,reviewDetails,(book,review)=>{
  if(book.id === review.id) {
    let clone = Object.assign({},book)
    clone.ratings = review
    return clone
  }
})

console.log(mergedBookDetails);