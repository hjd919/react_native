const initialState = {
	'tab':'test',
};

export default function navigation(state = initialState, action){
	switch(action.type){
		case 'SWITCH_TAB':
			return {...state, tab:action.tab};
		default:
			return state;
	}
}