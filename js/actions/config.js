'use strict';

function loadConfig(){
	const config = {
			'apiURL' : 'http://baidu.com2'
		};
	return {
		type: 'LOADED_CONFIG',
		config,
	};
}

export {loadConfig};