## Vue.js
### 1. MVVM
+ MVVM是 model - view - viewmodel的缩写 它是一种设计思想
+ model 代表数据模型  view代表UI组件  viewmodel是它们两个的中间层，model和view本身没有直接的联系，它们两个是通过viewmodel关联  viewmodel是通过数据的双向绑定v-model来把它们关联起来的，它们之间的数据同步是自动的
+ 为什么用这种设计思想 ： dom 操作和数据的同步都又mvvm来管理 ， 开发者只需要关注业务逻辑

### 2. MVVM 和 MVC 的区别
+ 它们都是设计思想

### 3. Vue.js的生命周期
+ 两个常用的：
    + created：在实例创建后，在这里一把对需要初始化的数据进行处理，HTML元素还没挂载
    + mounted: HTML元素挂载到Vue实例后，在这里使用，在这里可能会用到created中处理完的数据，
        + 比如：对url中参数的参数值的提取，对一些默认的状态值的设定等等
1. 创建前  创建后   ：创建前： data数据还没初始化 创建后 data数据可以用
2. 载入前  载入后   ：挂在dom结点但是插值表达式不生效，插值表达式替换
3. 更新前  更新后   ：更新前：data是新的还没更新到页面，更新后：已经更新到界面了
4. 销毁前  销毁后   ：Vue实例已经解除了事件监听以及DOM的绑定，对data的改变不会触发周期函数


### 4. Vue.js一些基本指令
1. v-bind  or : 绑定变量
2. v-text:绑定标签内显示的内容  
    + 比如 ``` <p v-text="text">  这里显示data中的text变量 </p>```
3. v-html:以html的形式渲染变量内容相当于innerHTML
4. v-show:根据条件的成立于否设置DOM的display属性
5. v-if:根据条件的成立于否决定这个元素是否插入到DOM树里
    + v-show 和 v-if的对比， if适用于切换不频繁的场景，因为它要进行结点渲染
6. v-for：循环产生同一个组件，每个结点都需要要有一个独一无二的key
7. v-on or @：绑定点击事件，  @click="open"  ,点击事件出发open函数
    + 事件修饰符：
        + .stop 阻止冒泡
        + .prevent 阻止默认事件 ， 例子：比如a标签被点击之后默认是跳转到href属性里的连接
        + .capture 添加事件侦听器时使用事件捕获模式
        + .self 
        + .once 事件只出发一次
8. v-mode：实现数据的双向绑定


## Vue-Resource （依赖vue.js）
+ ```npm install  vue-resource```
+ ```import VueResource from 'vue-resource'```
+ ```Vue.use(VueResource);```
1.  常用的 ：get 和 post 请求
```
// 基于全局Vue对象使用http
Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);

// 在一个Vue实例内使用$http
this.$http.get('/someUrl', [options]).then(successCallback, errorCallback);
this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
```
2. 支持的HTTP方法
```
get(url, [options])
head(url, [options])
delete(url, [options])
jsonp(url, [options])
post(url, [body], [options])
put(url, [body], [options])
patch(url, [body], [options])
```

## Vue-Router (热依木说成就Vue的是Vue-Router)
+ ``` npm install vue-router  --save-dev ```
+ ``` import VueRouter from 'vue-router' ```
+ ``` Vue.use(VueRouter)```
### 介绍：vue-router是官网的路由管理器，让构建单页面变得易如反掌
    + 优点：不需要每次从服务器获取全部数据，只需要获取部分数据重新渲染即可，快速展现给用户
1. 使用方法：
+ 创建router目录，目录下新建index.js 
+ main.js中引入，注册到Vue实例里
+ 组件的使用：
    + 创建xx.vue文件书写组件
    + router中引入xx.vue组件
    + route中注册该组件
    + 用标签的方式放到指定的地点