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
    - 修改为react-native-elements的tab使其跨平台
    
* 导航条
    - react-native-tabbar-navigator [参考Weekly75](https://github.com/fakefish/Weekly75/blob/master/app/common/WeeklyApp.js)
    - NavigatorIOS [参考shopping-react-native](https://github.com/bigsui/shopping-react-native)；
    - 自定义导航条 [参考GitHubPopular](https://github.com/crazycodeboy/GitHubPopular/tree/master/js/page)
    - elements + navbar 当前使用此导航条

* common增加全局静态资源目录，含有styles,img;局部资源在各自页面目录下
* 应用配置目录，含有各个配置json文件，例如菜单，应用基本信息，增加colors,fonts配置文件
* helpers目录，含有基础帮助，例如获取api资源，获取图片
* 封装获取api资源
* 列表 [参考react-native-dribbble-app](https://github.com/catalinmiron/react-native-dribbble-app)
* 详情
* 分享
* 用户注册（邮箱，第三方，设备idfa）登录
* 我的tab页面

* 公共组件：适配ios和android
    - 样式 MyStyleSheet ios|android
    - 纯按钮 MyButton: type: (default)'primary' | 'secondary' | 'bordered';
    - 列表按钮 MyTouchable:TouchableHighlight|TouchableNativeFeedback
ps 用react-native-elements样式库组件替换

## [组件](/doc/组件.md)
## [生命周期](/doc/生命周期.md)
## [API](/doc/API.md)

## 工具
    - Deco IDE 组件编写方便，拖拉原生组件；缺点：

## 参考app
* f8app
* catalinmiron/react-native-dribbble-app

## app推送配置，实现友盟推送

## 问题和解决
    - 网络请求失败：封了非https的请求：https://segmentfault.com/a/1190000002933776
    - NavigatorIOS的内容上移动了，默认是这样，需加参数translucent={false} 取消透明
    - MyButton不好用：用react-native-elements样式库组件替换
    - ViewPager 和 react-native-viewpager分别作用？区别在哪？
    - tabbar遮挡了：marginBottom:50

## 经验体会
    * 组件不做逻辑状态判断，放action判断，组件只负责渲染各个状态界面
    * list加载条不显示问题解决：导入时组件不能用{}括起来
    * 导航条不显示：组件如果被View包括，包括起来需加flex:1样式

## TODO
    * 用户注册（邮箱，第三方，设备idfa）登录
    * “我的”界面 react-native-parallax-view
    * 消息推送
    * 优化使用Navigator替换NavigatorIOS 或者 自定义导航条
    * [微信分享](http://www.lcode.org/%E8%B6%85%E8%AF%A6%E7%BB%86react-native%E5%AE%9E%E7%8E%B0%E5%BE%AE%E4%BF%A1%E5%A5%BD%E5%8F%8B%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%88%86%E4%BA%AB%E5%8A%9F%E8%83%BD-androidios%E5%8F%8C%E5%B9%B3%E5%8F%B0/)
