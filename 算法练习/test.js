
(function(){
    console.log([] instanceof Array)
    console.log(arguments instanceof Array)
})()

// /**
//  * 思路：回溯法
//  * 1·先把给定的数字和所需的火柴联系在一起
//  * 2.按照所需火柴数量做升序排序
//  * 3.先给第一个数字分配最多的火柴，把剩余的分配给后面的
//  * 4.如果分配成功则返回，根据分配生成最大数
//  * 5.如果分配失败，则从第一个元素身上拿出摆一次所需的火柴，把新的剩余的火柴分配给后面的元素
//  * 6.重复4,5步，直到火柴使用完毕
//  */

// var huochai = 20
// var arr = [3,7,8,4]

// my_filter(arr)
// // 格式化输入
// function my_filter (arr) {
//     var arr = arr.map(item => {
//         return parseInt(item)
//     })
//     console.log('格式化后：', arr)
//     // 分配火柴
//     arr = arr.map(item => {
//         return {
//             num: item, // 数字
//             match: match_num(item), // 对应的火柴
//             sum: 0 // 生成的次数
//         }
//     })
//     console.log('匹配火柴后：', arr)
//     // 排序
//     for(let i = 0; i<arr.length; i ++) {
//         for(let j = 0; j < arr.length - 1 - i; j ++) {
//             if (arr[j].match > arr[j+1].match) {
//                 arr[j] = [arr[j+1], arr[j+1] = arr[j]][0]
//             }
//         }
//     }
//     console.log('火柴总数：', huochai)
//     console.log('排序后：', arr)


// }
// // 给数字分配需要的火柴数
// function match_num (num) {
//     if (num  == 1) {
//         return 2
//     }
//     if (num == 2) {
//         return 5
//     }
//     if (num == 3) {
//         return 5
//     }
//     if (num == 4) {
//         return 4
//     }
//     if (num == 5) {
//         return 5
//     }
//     if (num == 6) {
//         return 6
//     }
//     if (num == 7) {
//         return 3
//     }
//     if (num == 8) {
//         return 7
//     }
//     if (num == 9) {
//         return 6
//     }
// }



// // 2 5 5 4 5 6 3 7 6

// // // 6 2
// // var arr = [1 ,2 ,3, 3,3,3,5, 1 ,2]
// /**
//  * 思路：
//  * 1.统计每个果汁类型的出现次数
//  * 2.计算每个果汁的购买数量
//  * 3.合并出所有果汁的购买数量得出总的购买数量
//  */

//  function fn (arr) {
//      var newArr = []
//     //  统计出现次数
//      arr.map(item => {
//          if (newArr.findIndex(i => i.key === item) !== -1) {
//             newArr[newArr.findIndex(i => i.key === item)].sum ++
//          } else {
//              newArr.push({
//                  key: item, // 果汁类型
//                  sum: 1,   // 需要的数量
//                  num: 0    // 实际购买数量
//              })
//          }
//      })
//     //  计算实际购买的数量
//     newArr.map((item, index) => {
//         newArr[index].num = parseInt(item.sum / 2) + item.sum % 2
//     })
//     // 计算总数
//     var sum = 0
//     newArr.map(item => {
//         sum = sum + item.num
//     })
//     return sum
//  }
//  fn(arr)