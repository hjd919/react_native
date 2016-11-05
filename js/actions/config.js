import * as TYPES from './types';
import api from '../helpers/api';

async function loadConfig(){
	try{
		const config = await api.getResources('config/app_launch');
		const action = {
		  type:TYPES.LOADED_CONFIG,
		  config,
		};
		return action;
	} catch (error){
		// 网络异常
		const action = {
		  type:TYPES.LOADED_CONFIG_FAIL,
		  isLoadingFail:true,
		  isLoading:false,
		};
		return action;
	}
}

export default {loadConfig};