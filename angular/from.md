# 组件传值, 跟Vue.js非常相似
## 1. 父传子
父组件通过属性绑定来传递方法和属性
``
<app-child #child [msg]="123" [other]="other" (outEvent)="someData($event)"></app-child>
``  

子组件通过@input()来接受传过来的值或这个方法  
 ``
  @Input() msg:string  
  @Input() other: any  
 ``   
 ## 2. 父组件操作子组件  
父组件可以通过# name来给组件命名 在组件中可以通过name.fn来获取执行子组件的方法  
``
 <button (click)="child.dosome()">父组件通过#name调用子组件的方法   </button>
 ``  
 还可以通过viewchild的方式来获取到子组件，来调用子组件的方法  
```
 @ViewChild('child') cd;  
 this.cd.dosome()  
`` 
## 3. 子组件传值给父组件
子组件中 发送一个事件同时传入数据
``
  @Output() private outEvent= new EventEmitter<string>()   
  this.outEvent.emit('some data string')
``  
父组件中   接受传过来的数据  
``
 <app-child (outEvent)="someData($event)"></app-child>
``

# 条件渲染
条件渲染：*ngIf = "表达式"   
循环渲染：*ngFor = "let item of items, let i = index"索引的获取  
条件显示：[style.display] = "isShow == true ? 'blcok' : 'none'"  


# Event
（click）= "changeColor"  
小括号就是绑定一个事件， 右边是要调用的函数




# Style 

## 1.字符串模式：  

```
// 定义变量的方式
class="{{classStr}}"  
[class] = "classStr"
// 下面这种定义方式会叠加
<h1 class = "{{classStr}}" [class] = "classStr"> style example </h1>
[attr.class] = "classStr"
```  
## 2.对象模式
```
<! -- 对象模式 -->
<h1 [class] = "classObj"> classObj </h1>
classObj = {
  style1: false,
  style2: true,
  style3: true
}
// 最终效果是 style2 + style3

```
## 3.数组模式
```
// 字符串
<h1 [class] = "['blue', 'active', 'abc']"> class7 </h1>
// 变量
<h1 [class] = "classArr"> class8 </h1>
classArr = ['blue', 'active', 'abc']
```

## 4.style设置
```
<h1 [style] = "styleStr"> class9 </h1>
// 变量
styleStr = 'color: red; font-size: 20px;'
// 对象
styleObj = {
  color: red,
  width: 100px;
}
```





















# 管道
用来对数据进行格式化，以下是常用的内置管道，管道可以自定义   
## 1. 大小写管道
`<p>将字符串转换为大写{{str | uppercase}}</p>`
## 2. 日期管道
`<p>将字符串转换为大写{{str | uppercase}}</p>`
## 3. 小数管道
number管道用来将数字处理为我们需要的小数格式  
接收的参数格式为{最少整数位数}.{最少小数位数}-{最多小数位数}  
其中最少整数位数默认为1  
最少小数位数默认为0  
最多小数位数默认为3  
当小数位数少于规定的{最少小数位数}时，会自动补0  
当小数位数多于规定的{最多小数位数}时，会四舍五入  
`<p>圆周率是{{pi | number:'2.2-4'}}</p>`
## 4 .货币管道
```
<p>{{a | currency:'USD':false}}</p>
<p>{{b | currency:'USD':true:'4.2-2'}}</p>
```
# Form
## 变量换值
  
## 获取表单的值
1. 通过以下方式可以单向获取表单的值
```
<div>
  <input type="text" #input1>
  <button type="button" (click) = "getValue(input1)">getValue</button>
</div>
```
ps: 如果html里面有#input1,ts里面也有input1，则html里面的优先级最高  

## 双向绑定
1. 导入注册表单模块FromsModule
```
 import { FormsModule } from '@angular/forms' // 重点
 @NgModule({
  declarations: [
  ],
  imports: [
    FormsModule, // 重点
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
2.指令(双向绑定)  
```
<input type="text" [(ngModel)] = "userName">  
<h1>{{userName}}</h1>
```