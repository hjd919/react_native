'use strict';

const initialState = {
	'apiURL':'hello',
};

export default function config(state = initialState, action){
	if(action.type == 'LOADED_CONFIG'){
		return {
			'apiURL': action.config.apiURL,
		};
	}
	return state;
}