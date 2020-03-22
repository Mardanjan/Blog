var str = "hello world"
for(var i =0 ; i<str.length ; i++){
    if(str[i]== ' '){
        str[i]='%20'
    }
}
console.log(str.length)
setTimeout(function(){
    console.log(str)
},1000)