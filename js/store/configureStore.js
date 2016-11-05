import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
// 第三方中间件
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
// 自定义中间件
import crashReporter from './crashReporter';//在 state 更新完成和 listener 被通知之后发送崩溃报告
import array from './array';//返回action=数组,依次执行各个action
import promise from './promise';//返回action=promise

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

// 日志中间件
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

var createStoreWithMiddleware = applyMiddleware(thunk, promise, array, crashReporter, logger)(createStore);

export default function configureStore(onComplete){
	// 持久保存
	// const store = autoRehydrate()(createStoreWithMiddleware)(reducers);
	// persistStore(store, {storage: AsyncStorage}, onComplete);
	const store = createStoreWithMiddleware(reducers);
	// if(isDebuggingInChrome){
	// 	window.store = store;
	// }
	return store;
}
