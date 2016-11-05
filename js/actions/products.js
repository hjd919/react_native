import * as TYPES from './types';
import api from '../helpers/api';
import {PAGE_SIZE} from '../configs/config.json';

// 获取数据
async function _loadProducts(state){
	try{
		let {page,isRefresh,products} = state.products;

		const res = await api.getResources('product/product_list?page='+page);

		// 判断是否有误
		if(res.code){
			throw new Error(res.message);
		}
		let data = res.data;

		// 判断是否还有更多数据
		let new_products = data.product;
		const hasMore = new_products.length < PAGE_SIZE ? false : true;

		// 如果有更多数据，更新页码
		if(hasMore){
			page++;
		}

		// 判断是否刷新还是加载更多
		if(isRefresh){
			products = new_products;
		}else{
			for(let new_product of new_products){
				products.push(new_product);
			}
		}

		const action = {
		  type:TYPES.LOADED_PRODUCTS,
		  isLoadingFail:false,
		  isLoading:false,
		  hasMore:hasMore,
		  page:page,
		  products:products,
		  isRefresh:false,
		};
		return action;
	} catch (error){
		console.log(error);
		// 网络异常
		const action = {
		  type:TYPES.LOADED_PRODUCTS_FAIL,
		  isLoadingFail:true,
		  isLoading:false,
		  isRefresh:false,
		};
		return action;
	}
}

// 正在加载数据
function _requestProducts(){
	const action = {
	  type:TYPES.REQUEST_PRODUCTS,
	  isLoadingFail:false,
	  isLoading:true,
	};
	return action;
}

// 是否需要获取数据
function shouldLoadProducts(state){
	const products = state.products;

	if(products.products.length == 0){
		return true;
	} else if (products.isLoading == true) {
		return false;
	} else if (products.hasMore == false) {
		// 重新获取，不从缓存获取
		return false;
	}else{
		return true;
	}
}

// 根据是否需要来获取数据
function loadProductsIfNeeded() {
	return (dispatch, getState) => {
		const state = getState();
		if (shouldLoadProducts(state)){
			dispatch(_requestProducts());
			return dispatch(_loadProducts(state));
		}
	}
}

// 刷新数据=重置数据:页码和列表数据
function refreshProducts(){
	const action = {
	  type:TYPES.REFRESH_PRODUCTS,
	  products:[],
	  page:1,
	  isRefresh:true,
	};
	return action;	
}

export default {loadProductsIfNeeded, refreshProducts};