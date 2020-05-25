# angular router

+ 初次接触angular的路由，感觉跟vue的路由差不多  

### 使用方法：  
1. app-routing.module.ts里定义路由对象router,并泄露该对象 
 
```
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";

const routes: Routes = [
    {path:'',component:HomeComponent}//配置路由
    {path:'**',component:code404}//配置404页面
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[]
})
export class AppRoutingModule {}
```  
  
2. app.module.ts里引入路由对象并注册    

```
import {AppRoutingModule} from './app-routing.module'
@NgModule({
  declarations: [// 源数据，只能声明组件、指令和管道
    AppComponent , HomeComponent
  ],
  imports: [
    BrowserModule,//开发web必备模块
    AppRoutingModule, // 吧AppRoutingModule注册到AppModule上
  ],
  providers: [{ 
      provide: [], 
      useValue: []
    }],//只能声明服务
  bootstrap: [AppComponent]
})
export class AppModule { }
```
3. 在app.component.html模板中写入组件,该组件根据浏览器的URL显示相应的组件

```
 <router-outlet></router-outlet>
```

4. 跳转：  
 a：标签跳转：
 `<a [routerLink]="['/']">首页</a>`
 b：JavaScript代码跳转
  ` this.router.navigate(["/"])`

5. 路由传参：


















