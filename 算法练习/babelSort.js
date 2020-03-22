function qwe (str, dic)  {
    let ds = dic || '输出值：'
    console.log(ds, str)
}
var arr = [-10, -5, -2, 7, 15 ,50]



function Fn() {};
Fn.prototype.name = '时间跳跃';

function fn() {
    console.log(this.name);
};

let obj = new Fn();
obj.func = fn;

let obj1 = {
    name: '听风是风',
    o: obj
};
obj1.o.func() //?



// var arr = [1, -2, 4, 8, -4, 7, -1, -5]
// function maxSubArray (arr) {
//     var max = Math.min.apply(null, arr),
//     sum
//     for (let i=0; i< arr.length; i++) {
//         sum = 0;
//         for (let j =i; j < arr.length; j++) {
//             sum += arr[j]
//             if (sum > max) {
//                 max = sum
//             }
//         }
//     }
//     return max
// }
// qwe(maxSubArray(arr))

// var str = 'aaiiacaaa'

// function huiwen (str) {
//     if (str.length <= 1) {
//         return true
//     } else {
//         if (str[0] !== str[str.length -1]) {
//             return false
//         } else {
//             return huiwen(str.substr(1, str.length -2))
//         }
//     }
// }
// qwe(huiwen(str))
//场景1 全局环境中的this指向全局对象
// var a , b, c
// this.a = 10
// console.log(a)
// b = 20
// console.log(b)
// c = 30
// console.log(c)

// var arr = []
// arr.length = 51
// arr = arr.map((item, index) => {
//     return index
// })
// var a =  arr.join('1').split('')
// qwe(a)
// qwe(a.length)
// qwe(arr)
// qwe(a)

// 用数组方法吧数组的元素加起来
// var arr = [1,2,3,4,5], result =0
// result =  arr.reduce(function(result, curr) {
//     return result += curr
// })
// qwe(result)
// deepCloneObj
// function deepCloneObj (obj) {
//     // 根据是数组还是对象，开辟一个新的天地
//     var objClone = Array.isArray(obj) ? [] : {}
//     if (obj && typeof obj === 'object') {
//         for (key in obj) {
//             // 只拷贝自己的属性，不拷贝继承的属性
//             if (obj.hasOwnProperty(key)) {
//                 // 如果属性不为空且是对象的话递归
//                 if (obj[key] && typeof obj[key] === 'object') {
//                     objClone[key] = deepCloneObj(obj[key])
//                 } else {
//                     objClone[key] = obj[key]
//                 }
//             }
//         }
//     }
//     return objClone
// }
// var obj = [1,2,3,4]
// var obj2 = deepCloneObj(obj)
// qwe(obj)
// qwe(obj2)
// obj2[0] = 33
// qwe(obj)

// 将下面的对象序列化为JSON字符串，序列化时删除部分属性
// var obj = {
//     name : 'mardan',
//     arr: [1,2,3],
//     arr1: [1,2,2]
// }
// console.log(JSON.stringify(obj, ((key, value) => {
//     if (key === 'name') {
//         return undefined
//     }
//     if (key === '0') {
//         return undefined
//     }
//     return value
// })))
// JSON.stringfy的第二个参数是过滤器

// Number.prototype.add = function(num) {
//     return this + num
// }
// Number.prototype.minus = function(num) {
//     return this - num
// }

// console.log((1).add(2).minus(3))

// function makeArr () {
//     let arr = []
//     while(arr.length < 8) {
//         let random = Math.round(Math.random() * 15 + 5)
//         if (arr.indexOf(random) == -1) {
//             arr.push(random)
//         }
//     }
//     return arr
// }

// console.log(makeArr())







// console.log([3>2>1 , 3<2<1])
// 一个对象接受另一个对象的所有的方法
// function mixin(receiver , supplier) {
//     Object.keys(supplier).forEach(i => {
//         receiver[i] = supplier[i]
//     })
//     return receiver
// }
// var obj1 = {
//     a: 2,
//     b: 3
// }
// var obj2= {}
// console.log(mixin(obj2, obj1))


// function calcDescartes (array) {
//     if (array.length < 2) return array[0] || [];
//     return [].reduce.call(array, function (col, set) {
//         var res = [];
//         col.forEach(function (c) {
//             console.log('c:', c)
//             set.forEach(function (s) {
//                 console.log('s:', s)
//                 var t = [].concat(Array.isArray(c) ? c : [c]);
//                 t.push(s);
//                 res.push(t);
//                 console.log('t:', t)
//                 console.log('res:', res)
//             })
//         });
//         return res;
//     });
// }

// console.log(calcDescartes([[1,2,3],['a','b','c'], ['m','n']]));
/**
 * 思路：
 * 1. 第一个数组和第二个数组组合，结果会成为一个数组
 * 2. 后面的数组与第一个数组结合
 * 3. 后面数组继续走第二步
 */
// function decard (array) {
//     if (array.length === 0) {
//         return []
//     } else if (array.length === 1) {
//         return array
//     } else {
//         for(var i = 0; i < array.length - 1; i++) {
//             var newArray = [] // 两个元素排列组合后生成的数组
//             array[i].map(item1 => {
//                 array[i + 1].map(item2 => {
//                     var tempArray = [] // 临时数组，两个元素合到一起，最终会成为newArray的元素
//                     if (Array.isArray(item1)) { // 两个元素的排列组合结果会代替第二个原
//                         tempArray.push(...item1)
//                         // item1.map(itm => {      // 这样的话第二个元素与第三个元素的排列组合就是
//                         //     tempArray.push(itm) // 第一个元素和第二个元素的排列组合的结果和第三个元素的排列组合
//                         // })
//                     } else {
//                         tempArray.push(item1)
//                     }
//                     tempArray.push(item2) // 第二个元素是新的，并不是数组
//                     newArray.push(tempArray)
//                 })
//             })
//             array[i+1] = newArray
//         }
//         return array.pop() // 以此类推，最后一个元素会成为最终的排列组合结果
//     }
// }
// console.log(decard([[1,2],['a','b'],['c','d'],['!','$','#']]))
// console.log(decard([[1,2],['a','b'],['c','d'],['!','$','#']]).length)

// var arr = [5,55,21,1,2,3,4]

// var sliceArr = arr.slice()
// qwe(sliceArr)
// sliceArr[0] = 1
// qwe(sliceArr)
// qwe(arr)

// function selectionSort (arr) {
//     for (var i = 0; i < arr.length ; i++) {
//         minIndex = i
//         for (var j = i+1; j < arr.length ; j++ ) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         if (minIndex!= i) {
//             arr[i] = [arr[minIndex], arr[minIndex] = arr[i]][0]
//         }
//     }
//     return arr
// }
// console.log(selectionSort(arr))

// var toString = Object.prototype.toString
// console.log(toString.call(null))
// console.log(toString.call({}))