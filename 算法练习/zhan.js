/**
 * 括号相关的算法题可能会用到栈
 */

//  封装一个栈
class Stack {
  // 栈
  array = []
  // 获取长度
  getLength () {
    return this.array.length
  }
  // 压入栈
  push (item) {
    return this.array.push(item)
  }
  // 取出栈
  pop () {
    let item = this.array[this.array.length - 1]
    this.array.length = this.array.length - 1
    return item
  }
  // 查看栈顶元素
  lookIndex () {
    return this.array[this.array.length - 1]
  }
}

/**
 * XML文档（百度2016实习生真题）


									
题目描述

									
XML文档是WEB应用中常用的一种数据交换方式，其中标签是XML文档的关键部分。XML中没有预定义标签，所有的标签都要用户自行定义。

标签的定义是将标签名放入一对尖括号中（<>）中，即构成一个起始标签，如。若在起始标签中标签名的前面加上一个终止斜杠（/），则构成一个对应的结束标签，如。起始标签和结束标签必须成对出现，一对标签内可以嵌入其他标签对，但两对标签之间不能出现交叉的情况。若一对标签内部未嵌入其他标签对，则可以嵌入非标签内容。

满足上述要求的xml文档都是合法的，如以下两个文档都是合法的。


Ice Cream5 m

下面两个文档则不是合法的XML文档。


Ice Cream5 m

小B所在的WEB开发小组大量应用了XML文档进行前后台数据交换，因此需要确保接收到的文档是合法的。请你帮忙编写一个程序确定xml文档的合法性。

思路： 只需要判断这些xml标签是否成对出现，嵌套方式是否正确（类似括号匹配）
1. 格式化xml字符串
2. 提取所有标签，存放到一个数组
3. 后面的逻辑跟括号匹配一样
 */
let str = '<recipe></recipe><recipename>Ice Cream<preptime></preptime></recipename>5 m'
//  function checkXML (str) {
//   function fillter (str) {
//     let rg = /^<[\s\D]*(>$)|(\/>$)/g
//   }
//  }
str = '<h2>sda21sdaas</h2>'
function fillter (str) {
  let rg = /<(>)+/g
  return str.replace(rg, ',')
}
console.log(fillter(str))




/**
 * 括号匹配
 * 1.左括号入栈
 * 2.是否为右括号，右括号与栈顶的括号匹配的话出栈 ， 不匹配就返回false
 * 3.遍历完字符串，如果栈时空的返回true，否则返回false
 */

// let str = '()(({}[[)]]))'
// let leftStr = ['(', '[', '{'], rightStr = [')', ']', '}']
// let s = new Stack()
// function kuoHaoPiPei (str) {
//   for( let i = 0; i < str.length; i++) {
//     if (leftStr.includes(str.charAt(i))) {s.push(str.charAt(i))}
//     else if (rightStr.includes(str.charAt(i))) {
//       if (match(s.lookIndex(), str.charAt(i))) {
//         s.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return s.getLength() === 0 ? true : false
//   function match (left, right) {
//     if (left == '(' && right == ')') {return true}
//     else if (left == '[' && right == ']') {return true}
//     else if (left == '{' && right == '}') {return true}
//     else {return false}
//   }
// }
// console.log(kuoHaoPiPei(str))


