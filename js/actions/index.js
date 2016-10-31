import configActions from './config';
import navigationActions from './navigation';

module.exports = {
	...navigationActions,
	...configActions,
};