import {combineReducers} from 'redux';

// reduces
import products from './products';
import config from './config';
import navigation from './navigation';

export default combineReducers({
	config,
	navigation,
	products,
});