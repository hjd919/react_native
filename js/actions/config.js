import * as TYPES from './types';

async function loadConfig(){
	try{
		const response = await fetch('http://monitor.adyouzi.cn/config/app_launch');
		const data = await response.json();
		const config = data.data;	
		const action = {
		  type:TYPES.LOADED_CONFIG,
		  config,
		};
		return action;
		// return action;
	} catch (error){
		throw new Error('出错了'+error);
	}
	// return Promise.resolve(action);
}

// function loadConfig(){
// 	return (dispatch) => {
// 		const config = _loadConfig()

// 		config.then((result)=>{
// 			dispatch(result);
// 		});

// 		return config;		
// 	};
// }

export default {loadConfig};