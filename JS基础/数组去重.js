var array = [1,2,2,3,4]
var max = Number.MAX_VALUE

/**
 * 方法三：双排序, 第一次排序后从头开始遍历，如果i = i+ 1 的话 i + 1 = intMax  并记录 intmax的总数
 *                第二次排序后数组长度-intmax的总数
 
var array = [1,2,3,2,4]
var max = Number.MAX_VALUE
function sort(array){    //冒泡排序
    for(var i=0 ; i<array.length ; i++){
        for(var j=0 ; j<array.length-i-1 ; j++){
            if(array[i]>array[i+1]){
                var temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
            }
        }
    }
    return array;
}
array=sort(array)  // 第一次排序
var sum = 0;
for(var t=0; t<array.length-1 ; t++){  //获取max的总数
    if(array[t]===array[t+1]){
        array[t]=max
        sum++
    }
}
array = sort(array)  //第二次排序
array.length -=sum  //剪掉数组

console.log(array)

*/

/**
 * 方法二：利用indexOf方法，如果不在这个数组里就插入
 */
/**
var array = [1,2,2,3,4]
var b = []
var index = 0
for(var i = 0 ; i < array.length ; i++){
    if(b.indexOf(array[i]) === -1){
        b[index++] = array[i]
    }
}
console.log(b)
 */



/**
 * 方法一：简单粗暴的蛮力法
 * 思路：新建一个数组B，将原有数组A的元素逐个插入到B，插入之前判断这个元素是否在这个数组里，如果不在就插入反之不插入
 * 思路：
 */

/**
 * var array = [1,2,2,3,4]
function isInclude(array , n){
    var include = false 
    for(var i=0 ; i<array.length ; i++){
        if(n===array[i]){
            include = true
        }
    }
    return include
} 
var b = []
var index = 0
for(var j=0 ; j<array.length ; j++){
    if(isInclude(b,array[j])===false){
        b[index++] = array[j]
    }
}
console.log(b)
 */
 
