
let strs = ["",""]

var groupAnagrams = function(strs) {
  // 格式化
  let arr = strs.map((item, index) => {
      return {
          index:index,
          items: [...item]
      }
  })
  for (let i = 0; i < arr.length; i++) {
    arr[i].items = arr[i].items.sort((x, y) => x.charCodeAt() - y.charCodeAt())
    arr[i].str = arr[i].items.join('')
  }
  // 筛选
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let tempArr = []
    for (let j = i+1; j < arr.length-1; j++) {
      if (arr[i].str === arr[j].str || (arr[i].str.length ===0 && arr[j].length === 0) ) {
        tempArr.push(arr[j])
        arr.splice(j, 1)
        j--
        console.log('sda')
      }
    }
    tempArr.push(arr[i])
    arr.splice(i, 1)
    i--
    result.push(tempArr)
  }
  // 整理
  result.map(item => {
    let tempArr = []
    item.map(itm => {
      tempArr.push(strs[itm.index])
    })
    arr.push(tempArr)
  })
  return arr
};

console.log(groupAnagrams(strs))


/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 * 题目的意思：
 * 1.给定一个元素为单词的数组 words
 * 2.给定一串数字num
 * 3.从words里找出与num这串数组打出的字符匹配的单词
 * 4.给定数组串的长度与字母串的长度相等
 */
// var getValidT9Words = function(num, words) {
//   var map = new Map()
//   map.set('2', ['a', 'b', 'c'])
//   map.set('3', ['d', 'e', 'f'])
//   map.set('4', ['g', 'h', 'i'])
//   map.set('5', ['j', 'k', 'l'])
//   map.set('6', ['m', 'n', 'o'])
//   map.set('7', ['p', 'q', 'r', 's'])
//   map.set('8', ['t', 'u', 'v'])
//   map.set('9', ['w', 'x', 'y', 'z'])
//   var result = []
//   words.map(word => {
//     if (word.length === num.length) {
//       var count = 0
//       for (let i = 0; i < num.length; i++) {
//         const array = map.get(num[i])
//         if (array.includes(word[i])) {
//           count ++
//         }
//       }
//       if (count === num.length) {
//         result.push(word)
//       }  
//     }
//   })
//   return result
// };

// var num = "8733"
// var words = ["tree", "used"]
// log(getValidT9Words(num, words))



// let array1 = [4, 1, 2,0, 1, 1, 1, 2], array2 = [3, 6, 3, 3]
// // let array1 = [1, 2, 3], array2 = [4, 5, 6]
// var findSwapValues = function(array1, array2) {
//   var sumOfArray1 = array1.reduce((s, cur) => s+cur)
//   var sumOfArray2 = array2.reduce((s, cur) => s+cur)
//   // 假设： sum1 - sum2 > 0  则： sum1 - x = sum2 + x => sum1 - sum2 = 2x => sum1 - sum2 必须为偶数
//   // 我们要求x， 这里的x将会 arr1[i] - arr1[j] === x 
//   if ((sumOfArray1 - sumOfArray2) % 2 !== 0) {
//       return []
//   }
//   if (sumOfArray1 > sumOfArray2) {
//       const diff = (sumOfArray1 - sumOfArray2) / 2
//       for (let i = 0; i < array1.length; i++) {
//           for (let j = 0; j < array2.length; j++) {
//               if (array1[i] - array2[j] === diff) {
//                   return [array1[i], array2[j]]
//               }
//           }
//       }
//   } else {
//       const diff = (sumOfArray2 - sumOfArray1) / 2
//       for (let i = 0; i < array2.length; i++) {
//           for (let j = 0; j < array1.length; j++) {
//               if (diff === array2[i] - array1[j]) {
//                   return [array1[j], array2[i]]
//               }
//           }
//       }
//   }
// };


// log(findSwapValues(array1, array2))


// let a = [1,2,3]
// log(a.map(x => {
//   return false
// }))

function log (x) {
  console.log(x)
}
// var log = (x) => {
//     console.log(x)
// }
// let [x, [y, z]] = [1, [2, 3]]
// console.log(x)
// console.log(y)
// console.log(z)
// var person = {
//     name: 'name',
//     age: 20,
//     gender: 'male'
//   }
//   var {name, age, gender} = person
//   log(name)
//   log(age)
//   log(gender)

// function binarySearch (arr, key, low, high) {
//         if (low > high) {
//             return -1
//         }
//         var baseVal = parseInt((low + high) / 2)
//         if (arr[baseVal] === key) {
//             return baseVal
//         }
//         if (key > arr[baseVal]) {
//             return binarySearch(arr, key, baseVal+1, high)
//         }
//         if (key < arr[baseVal]) {
//             return binarySearch(arr, key, low, baseVal-1)
//         }
//     }
// let arr = [1,2,3,4,5]

// console.log(binarySearch(arr, 5, 0, 5))

// var canPermutePalindrome = function(s) {
//   if (s === s.split('').reverse().join('')) {
//     return true
//   }
//   // 统计字符串的出现次数
//   var count = {}
//   for (let i = 0; i < s.length; i++) {
//       if (s[i] in count) {
//           count[s[i]] ++
//       } else {
//           count[s[i]] = 1
//       }
//   }

//   // 删除出现偶次的字符串
//   for (let item in count) {
//       if (count[item] % 2 === 0) {
//           while(count[item]--) {
//               s = s.replace(item, '')
//           }
//       }
//   }

//   // console.log(s)
//   // 如果字符串长度为1或者0则返回true，否则返回falee
//   return s.length < 2 ? true : false
// };

// console.log(canPermutePalindrome("aassa"))




// var reverseWords = function(s) {
//   var arr = s.split(' ').filter((item) => item.length > 0).reverse().join(' ')
//   return arr
// };
// var str = "  hello world!  "
// console.log(reverseWords(str))






// var arr = [1,0,1,1,0,1]
// var findMaxConsecutiveOnes = function(nums) {
//   var strArr = nums.join('')
//   strArr = strArr.split('0')
//   strArr.sort((x, y) => x.length - y.length)
//   return strArr[strArr.length-1].length
// };
// console.log(findMaxConsecutiveOnes(arr))




// function fn () {

// }
// fn.prototype.name = 1

// var obj = new fn()
// console.log('name' in obj)

// var arr = [1,2,3,2]
// console.log(new Set(arr).size)
// console.log(new Set(arr))
// console.log(Object.is(null, null))




// var nums =  [3,0,1]
// let res = nums.length
// for (let i = 0; i < nums.length; i++) {
//   res = res ^ nums[i] ^ i
//   // res = res ^ i
// }
// console.log(res)
/**
 * 
 * 某银行笔试编程题，20分，当时没写出来想哭。。。。
 * 
 *  求 n的m次幂的最后三位数
 *  n 和 m 取值 [1000, 10000]
 *  2000 ** 1111  值的最后三位是 000
 * 
 * 
 *  就一个思路：乘积的最后三位只与乘数和被乘数的最后三位有关，而与高位无关
 */
// function superPow(n, m) {
//   var sum = n % 1000
//   var str = ''
//   for (let i = 0; i < m-1; i++) {
//     sum = (sum % 1000) * (n % 1000)
//   }
//   str = '' + (sum) % 1000 // 格式化输出
//   if (str.length === 1) {
//     str = '00' + str
//   } else if ( str.length === 2) {
//     str = '0' + str
//   }
//   return str
// }
// console.log('pow', superPow(2, 5))
// console.log(223 ** 2)
// console.log(223 ** 3)
// console.log(223 ** 4)
// console.log(223 ** 5)
// console.log(223 ** 6)
// console.log(2232 % 1000)
//  * 考虑几种情况
//  * 1.以下字符结束，后面自动补0
//  * 十 0
//  * 百 00
//  * 千 000
//  * 万 0000
//  * 亿 0000 0000 0000
//  * 2. 先把字母转换成数字
//  */

// var str = "六十四万零千三百三十三"
// function test(str) {
//   var arr = str.split('')
//   var newArr = []
//   for (let i = 0; i < str.length; i++) {
//     newArr.push(trans(str[i]))
//   }
//   if (newArr[newArr.length -1] === '十') {
//     newArr[newArr.length -1] = '0'
//   }
//   if (newArr[newArr.length -1] === '百') {
//     newArr[newArr.length -1] = '00'
//   }
//   if (newArr[newArr.length -1] === '千') {
//     newArr[newArr.length -1] = '000'
//   }
//   if (newArr[newArr.length -1] === '万') {
//     newArr[newArr.length -1] = '0000'
//   }
//   if (newArr[newArr.length -1] === '亿') {
//     newArr[newArr.length -1] = '000000000000'
//   }
//   if (newArr[0] === '十') {
//     newArr[0] = '1'
//   }
  
//   console.log(newArr)

// }

// test(str)

// function trans(word) {
//   switch(word) {
//     case '零': return 0;
//     break;
//     case '一': return 1;
//     break;
//     case '二': return 2;
//     break;
//     case '三': return 3;
//     break;
//     case '四': return 4;
//     break;
//     case '五': return 5;
//     break;
//     case '六': return 6;
//     break;
//     case '七': return 7;
//     break;
//     case '八': return 8;
//     break;
//     case '九': return 9;
//     default: return word
//   }
// }
// // console.log( (2000 ** 1111).toString().substr(1,3))
// // console.log( 21 ** 2)
// // console.log( 21 ** 3)
// // console.log( 21 ** 4)
// // console.log( 21 ** 5)
// // console.log( 21 ** 6)
// // console.log( 21 ** 7)
// // console.log( 21 ** 8)
// // console.log( 21 **9)
// // console.log( 21 ** 10)
// // console.log( 21 ** 11)
// // console.log( 21 ** 12)
// // console.log( 21 ** 13)
// // console.log( 21 ** 14)
// // console.log( 21 ** 15)
// // console.log( 21 ** 16)
// /**
//  * 2 2 = 2*2
//  * 2 3 = 2*2*2
//  * 2 4 = 2*2*2*2
//  * 0.2 * 0.2 = 0.02
//  * 0.2 * 0.2 * 0.2 = 0.008
//  */

//  /**
//   * 只能用字符串来做
//   * 找规律
//   */