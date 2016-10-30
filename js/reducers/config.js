const initialState = {
	'environment':'production',
	'apiURL':'apiURL',
	'imageURL':'imageURL',
};

export default function config(state = initialState, action){
	switch(action.type){
		case 'LOADED_CONFIG':
			return {...state,apiURL:action.config.api_url,imageURL:action.config.image_url,environment:action.config.env==1?'production':'development'};
		default:
			return state;
	}
}