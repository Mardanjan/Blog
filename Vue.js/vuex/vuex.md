vuex : store 挂载到根组件，该store会被注入到跟组件下所有子组件当中，并且子组件可以通过this.$store来访问
```
	const template = {
		template: '<div> {{ count}} </div>',
		compute: {
			count (){
				return this.$store.count
			}
		}
	}
```
在mutation中混合一部调用会导致程序很难调试，当使用两个包含异步回调mutation来改变状态，是很难知道那个回调先被调用，在vuex中mutation都是同步事务	
```
	store.commit('increment')  // 代码会在此刻完成 ， 等这行代码完成了再去执行下面的代码
```

vuex表单处理 : 当把一个状态直接用v-model来绑定在表单上的时候，当数据发生变化v-model试图直接修改状态，在严格模式中因为状态不是在mutation函数中执行的，这里会抛出一个错误，这个错误的解决方案是使用vimodel给这个表单绑定一个普通的值，在触发onchange或者input等事件的时候，在事件回调中调用action或者mutation
```
	<input v-model="aValueInStore" />  
```
