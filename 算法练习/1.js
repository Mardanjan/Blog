// 计算1-100总共有几个8

let str = ''
for (let i = 0; i <= 1000; i++){
  str += i
}
let sum = 0
for (let i = 0; i < str.length; i++) {
  if (str[i] == 8) {
    sum++
  }
}
console.log(sum)