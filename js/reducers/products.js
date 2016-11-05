import * as TYPES from '../actions/types';

const initialState = {
	products:[],
	page:1,
	hasMore:true,
	isLoading:false,
	isLoadingFail:false,
	isRefresh:false,
};

export default function products(state = initialState, action){
	switch(action.type){
		case TYPES.REQUEST_PRODUCTS:
		case TYPES.LOADED_PRODUCTS_FAIL:
			return {...state,
				isLoading:action.isLoading,
				isLoadingFail:action.isLoadingFail,
			};
		case TYPES.REFRESHP_RODUCTS:
			return {...state,
				isRefresh:true,
				page:1,
			};
		case TYPES.INCR_PRODUCTS_PAGE:
			return {...state,
				page:action.page,
			};
		case TYPES.LOADED_PRODUCTS:
			return {...state,
				isLoading:action.isLoading,
				isLoadingFail:action.isLoadingFail,
				hasMore:action.hasMore,
			    page:action.page,
			    products:action.products,
			};
		default:
			return state;
	}
}