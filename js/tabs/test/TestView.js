import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

// common
import commonStyles from '../../styles/commonStyles';
import MyContainer from '../../common/MyContainer';

// redux
import { connect } from 'react-redux';
import {
    refreshProducts,
    loadProductsIfNeeded,
} from '../../actions';

// component
import TestList from './TestList';

// page
import TestDetail from './TestDetail';
import SearchView from '../../common/SearchView';

// 第三方插件

class TestView extends Component {
    constructor(props) {
      // 初始化
      super(props);
    
      this.state = {};
    }

    // 组件挂载完
    componentDidMount() {
      // 重载列表
      this.onRefresh();
    }

    // 点击列表项
    handlePressCell(row){
      const nextRoute = {
        component: TestDetail,
        name: row.name,
        params: { row : row }
      };
      this.props.navigator.push(nextRoute);
    }

    // 刷新列表事件
    onRefresh(){
        const {refreshProducts,loadProductsIfNeeded} = this.props;
        refreshProducts();
        loadProductsIfNeeded();
    }

    // 列表下拉加载事件
    onEndReached(){
      const {loadProductsIfNeeded} = this.props;
      loadProductsIfNeeded();
    }

    // 导航条按钮配置
    _renderNavBar(){
      let rightButtonConfig = {
          title: '搜索',
          handler: ()=>{
              this.props.navigator.push({
                name:'搜索',
                component:SearchView,
              });
          }
      };
      return rightButtonConfig;
    }

    // 渲染页面
    render() {
        let content = (
        <MyContainer
          title="发现"
          rightButtonConfig={this._renderNavBar()}
        >
          <TestList
            data={this.props.products}
            onRefresh={this.onRefresh.bind(this)}
            onEndReached={this.onEndReached.bind(this)}
            isLoadingFail={this.props.isLoadingFail}
            isLoading={this.props.isLoading}
            hasMore={this.props.hasMore}
            handlePressCell={this.handlePressCell.bind(this)}
          />
        </MyContainer>
        );
        return content;
    }
}

function select(store) {
    const {products} = store;
    return {
        products: products.products,
        isLoading:products.isLoading,
        isLoadingFail:products.isLoadingFail,
        hasMore:products.hasMore,
    };
}

function actions(dispatch) {
    return {
      loadProductsIfNeeded: () => dispatch(loadProductsIfNeeded()),
      refreshProducts: () => dispatch(refreshProducts()),
    };
}

export default connect(select, actions)(TestView);
