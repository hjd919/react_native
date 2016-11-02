import * as TYPES from './types';

function switchTab(tab) {
    return {
        type: TYPES.SWITCH_TAB,
        tab,
    };
}

export default { switchTab };
