# react_native框架

## [安装]()
    - react-native init react_native 初始化工程
    - 修改app基本信息:info.plist 应用名,版本

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
    - 关联配置xcode react-native link react-native-code-push
    - 插件使用 
        1. codePush(MyApp);
        2. codePush.sync(xx); f8用这种更新更快,在MyApp中
    - 安装codepush并注册
        - npm install -g code-push-cli
        - code-push register
        - code-push app add react_native
        - code-push app list 
    - 登录并查看设置info.plist的Deployment Key （code-push login、code-push deployment ls react_native -k、Staging,1.0.0）
    - 更新包 code-push release-react react_native ios

## 开发环境和生产环境、安装手机
    - 把所有的签名改为developer,设置开发团队

## app推送配置，实现友盟推送

## 应用功能开发

### 登录、用户登录状态

### 列表

### 详情

### 分享

## 问题和解决
    - 网络请求失败：封了非https的请求：https://segmentfault.com/a/1190000002933776