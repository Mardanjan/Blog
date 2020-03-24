
// console.log(1440 / 60)

var str = '330,450,630,690,750,780,990,1050'
function test (str) {
    var arr = str.split(',')
    // console.log(arr)
    var arr1 = []
    for (let i =0; i < arr.length; i = i+2) {
        arr1.push({
            start: arr[i],
            end: arr[i+1]
        })
    }
    // console.log(arr1)
    arr1 = arr1.map(item => {
        return {
            start: parseInt(item.start) - 30,
            end: parseInt(item.end) + 30
        }
    })
    arr1.push({
        start: 0,
        end: 0
    })
    // console.log(arr1)
    var arr2 = []
    for (let i = 0; i<arr1.length-1; i++) {
        if (arr1[i].end >= arr1[i+1].start && arr1[i].end <= arr1[i+1].end) {
            arr2.push({
                start: arr1[i].start,
                end: arr1[i+1].end
            })
            i++
        } else {
            arr2.push(arr1[i])
        }
    }
    // console.log(arr2)
    var arr3 = []
    arr2.map(item => {
        arr3.push(item.start)
        arr3.push(item.end)
    })
    console.log(arr3)

}
test(str)


// 时间限制：C/C++语言 1000MS；其他语言 3000MS
// 内存限制：C/C++语言 65536KB；其他语言 589824KB
// 题目描述：
// 检查单向链表是否存在环，若存在环则返回环的长度，否则返回0。

// 要求：算法实现尽可能做到时间、空间复杂度最优。

// 输入
// [ [ 1, 2 ], [ 2, 3 ] ]，表示的就是一个单向链表，1->2->3

// 输出
// 环的长度


// 样例输入
// [[1,2],[2,3],[3,4],[4,5],[5,3]]
// 样例输出
// 3

// var str = '[[1,2],[2,3],[3,4],[4,5],[5,3]]'

// function test (arr) {
//     // 字符串格式化数组:
//     var str = arr.substr(1, arr.length-2)
//     var a= []
//     for(var i =0; i<str.length; i++) {
//         if (str[i-1] == ']' && str[i] == ',') {
            
//         } else {
//             a.push(str[i])
//         }
//     }
//     var arr1 = a.join('').split(']')
//     arr1.length = arr1.length -1
//     arr =  arr1.map(item => {
//         var i = item.substr(1, item.length -1).split(',')
//         return {
//             head: parseInt(i[0]),
//             foot: parseInt(i[1])
//         }
//     })
//     // console.log(arr1)

//     // 查看是否存在环
//     var num = 0
//     arr = arr.map(item => {
//         if (item.head > item.foot) {
//             if (item.head - item.foot + 1 > num) {
//                 num = item.head - item.foot + 1
//             }
//         }
//     })
//     // console.log('长度:', num)
    
// }
// test(str)



















// 时间限制：C/C++语言 1000MS；其他语言 3000MS
// 内存限制：C/C++语言 102400KB；其他语言 626688KB
// 题目描述：
// 我们有一堆商品，要装到箱子中。已知箱子的容积是3，也知道每个商品的体积。不考虑商品的形状，假设只要N个商品的体积加和，恰好是3，就可以装进箱子。而且，如果商品的体积超过了3，只要恰好是箱子体积的倍数，可以把多个箱子拼成1个大箱子，来装商品。

// 比如：2个商品，体积加起来是6，可以用2个箱子来装载。

// 如果加起来是7，就不行了，必须得扔掉某个商品，再继续看能不能装进去。

// 找出一批商品，恰好装满M个箱子。你能找到的最大的M，是多少？

// 样例输入
// 3,6,5,1,8
// 样例输出
// 6
// 23 - 5 = 18
// var str = '3,6,5,1,8'
//  str = read_line()
// function test (str) {

//     var arr = str.split(',')
//     var sum = 0
//     // 格式化 + 求和
//     arr = arr.map(item => {
//         let i = parseInt(item)
//         sum += i 
//         return i
//     })
    
//     // 排序
//     for (let i=0; i<arr.length ; i++) {
//         for(let j=0; j<arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 arr[j] = [arr[j+1], arr[j + 1] = arr[j]][0]
//             }
//         }
//     }
// var contin = true
//     // 如果都可以装则直接返回
//     if (sum % 3 === 0) {
//         // return sum / 3
//         //  print(num)
//          contin = false
//     }

//     // 如果不能装就一个个从最小的开始去掉
//     var num = 0
    
//     arr.map(item => {
//         let s = sum - item
//         if (s % 3 === 0 && contin === true) {
//             num = s / 3
//             contin = false
            
//              //print(num)
//         }
//     })
//     // console.log(num)
//     print(num)
//     // print(arr)
// }

// test(str)