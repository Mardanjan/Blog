
### 为什么使用webpack？
+ 为了减少二次请求，处理错综复杂的依赖关系
### weboack安装以及配置
+ 1·安装webpack   全局安装：  webpack npm install -g webpack
+ 2·初始化项目文件目录： npm init 
+ 3·到项目文件下安装：   webpack npm install webpack
+ 4·安装全局的webpack-cli：   npm install -g webpack-cli  （坑：要根据安装的webpack的版本来安装相应的webpack-cli 不然会有麻烦的)
+ 5·配置mode 默认有production和development两种模式可以设置  可以在webpack.config.js文件中进行配置 （可以在webpack官网查看）
    ```
    mode: "production", // "production" | "development" | "none"
    mode: "production", // enable many optimizations for production builds
    mode: "development", // enabled useful tools for development
    mode: "none", // no defaults
    ```
    
### 初步使用webpack大包项目
+ 1·使用jquery后大包项目：
    + 先安装jquery： npm i jquery --save
    + 创建main.js并使用jquery书写代码逻辑 
    + 代码完成之后在webpack.config.js文件里配置一下大包的入口和出口，入口是要大包的文件，出口是大包完成之后的文件（可以在webpack官网查看）
  ```
  //配置入口和出口
  entry:path.join(__dirname, './src/main.js'),  // 入口，表示要使用webpack打包那个文件  
  output:{ //输出文件相关配置
      path : path.join(__dirname , './dist'),
      filename : 'bundle.js' 
  }
  ```
  ### 实现webpack的实时大包构建
  + 1·为什么要这么做？ 因为每次修改代码之后都需要手动运行打包命令比较麻烦，为了避免这个麻烦就是用webpack-dev-server来实现代码实时打包翻译
  + 2·安装： npm i webpack-dev-server --save-dev
  + 3·安装完成后直接用webpack-dev-server来进行打包
  + 4·在scripts节点下新增"dev": "webpack-dev-server"指令，可以进行实时打包  --contentBase src 根目录设置为src 同时修改index页面中script的src属性为<script src="bundle.js"></script>
  
  ### 使用webpack打包非js文件
  + 1·由于webpack只能打包js文件，所以需要各种第三方loader来处理这些文件 css. png jpg igf 还有字体等等文件
  + 2·下载css的第三方loader并配置   下载：npm i style-loader css-loader --save-dev
  + 3·修改配置：
  
```
   module:{  //这个节点用来配置所有的第三方模块加载器
    rules:[
        {test:/\.css$/ , use :['style-loader' , 'css-loader']} ,//配置处理。css文件的第三方loader模块
        {test:/\.(jpg|png|gif|bmp|jpeg)$/ , use :'url-loader'} ,//配置处理。.jpg jf png  处理图片路径的
        {test:/\.(ttf|eot|svg|woff|woff2)$/ , use :'url-loader'} ,//配置处理。.处理字体文件
        { test: /\.vue$/, use: 'vue-loader' }
        ]
    }   
  ```
  + 4·下载bootstrap： npm install bootstrap   
    
