# react_native框架

## [安装]()
    - react-native init react_native 初始化工程

## [构造代码目录结构-f8](https://github.com/fbsamples/f8app)
    - setup 启动
    - MyApp App组件
    - MyNavigator 导航组件
    - view 页面组件

## [redux](http://cn.redux.js.org/docs/react-redux/quick-start.html)
    - actions 控制器、获取api接口数据
    - reducers 根据action，处理更新store
        - {...state,xx:新值}
    - store
        - 简单创建
        - 含有中间件：日志，持久化，promise?，array?，(thunk中间件|async)网络异步
    - connect、select：获取store数据、actions：分发action

## [code-push](https://github.com/Microsoft/react-native-code-push#ios-setup)
    - npm install --save react-native-code-push@latest
    - react-native link react-native-code-push
    - 登录并获取Deployment Key 
        - code-push login!

## 开发环境和生产环境、安装手机

## app初始化事情-setup.js

## 登录、用户登录状态

## 问题和解决
    - 网络请求失败：封了非https的请求：https://segmentfault.com/a/1190000002933776