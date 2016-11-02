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
    - action的types集合

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
    - 把所有的签名改为developer,设置开发团队;apple账号


## 应用功能开发

* ios的tab页
    - 更新了组件名称，只需要引入一个TabBarIOS
* 导航条
    - react-native-tabbar-navigator [参考Weekly75](https://github.com/fakefish/Weekly75/blob/master/app/common/WeeklyApp.js)
    - NavigatorIOS [参考shopping-react-native](https://github.com/bigsui/shopping-react-native)；当前使用此导航条
    - 自定义导航条 [参考GitHubPopular](https://github.com/crazycodeboy/GitHubPopular/tree/master/js/page)
* 列表 [参考react-native-dribbble-app](https://github.com/catalinmiron/react-native-dribbble-app)! 封装api地址集合，!
* 详情
* 登录、用户登录状态
* 分享
* 公共：适配ios和android
    - 样式 MyStyleSheet ios|android
    - 纯按钮 MyButton: type: (default)'primary' | 'secondary' | 'bordered';
    - 列表按钮 MyTouchable:TouchableHighlight|TouchableNativeFeedback
* 优化
    1. 使用Navigator替换NavigatorIOS 或者 自定义导航条

## 组件

## API
[Linking](http://reactnative.cn/docs/0.36/linking.html) 打开应用或者捕获唤起app的连接

## 参考app
* f8app
* catalinmiron/react-native-dribbble-app

## app推送配置，实现友盟推送

## 问题和解决
    - 网络请求失败：封了非https的请求：https://segmentfault.com/a/1190000002933776
    - NavigatorIOS的内容上移动了，默认是这样，需加参数translucent={false} 取消透明
    - ViewPager 和 react-native-viewpager分别作用？区别在哪？