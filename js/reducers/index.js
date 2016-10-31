import {combineReducers} from 'redux';

// reduces
import config from './config';
import navigation from './navigation';

export default combineReducers({
	config,
	navigation,
});