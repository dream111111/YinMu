# 音沐
## 介绍
	1. 使用vue框架做了一个手机端音乐播放器项目,详细页面及其跳转都可以实现
	2. 完全可以以游客的身份进行登录
## 使用
	需要各种插件的使用，可以直接npm install 然后npm run dev (package.json)如下：
	`"dependencies": {
    "axios": "^0.17.1",
    "body-parser": "^1.18.2",
    "css-loader": "^0.28.7",
    "element-ui": "^2.0.5",
    "express": "^4.16.2",
    "json-loader": "^0.5.7",
    "less": "^2.7.3",
    "less-loader": "^4.0.5",
    "lyric-parser": "^1.0.1",
    "mint-ui": "^2.2.10",
    "mysql": "^2.15.0",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.19.0",
    "vue": "^2.5.2",
    "vue-awesome-swiper": "^2.6.7",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1"
  }`
  ## 主要技术

  	### 前端css部分
      	1. element 插件折叠面板的应用，
      	2. Mint-UI Tab切换
      		遇到的问题就是插件改样式的问题，解决方法就是新建一个scss文件，引入到main.js中，就可以改变插件中的样式(我觉得这是目前最好的解决方案)
  	### 前后端数据交互部分
      	1. axios网络请求数据，与后台数据进行交互
      	2. 登录注册与数据库的交互，进行增删改查
      	3. vue数据之间得到传递父传子，子传父，以及无关系的组件之间数据的传递(vuex)
      	4. 音乐播放部分
