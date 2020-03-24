/**
 * 正则表达式训练
 */

 // 1. 长度为8-10的用户密码（以字母开头、数字、下划线）
 class Reg {
   password (str) {
     let rg = /^[a-z A-Z]\w{7,10}$/
   }
 }

 let str = '1132'
 let rg = /^\w[\w]{1,2}$/

 console.log(rg.test(str))