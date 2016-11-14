import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

// common
import commonStyles from '../../styles/commonStyles';

// redux
import { connect } from 'react-redux';
import {
    refreshProducts,
    loadProductsIfNeeded,
} from '../../actions';

// component
import TestList from './TestList';
import TestCell from './TestCell';

// page
import TestDetail from './TestDetail';
import SearchView from '../../common/SearchView';

// 第三方插件
import NavBar from 'react-native-navbar';

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

    // 渲染列表项
    renderRow(row){
      return (
        <TestCell
          row={row}
          handlePressCell={this.handlePressCell.bind(this,row)}
        />
      );
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

    // 渲染导航条
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
      return(
        <NavBar
          style={commonStyles.navbar}
          title={{title:"发现"}}
          rightButton={rightButtonConfig}
        />
      );
    }

    // 渲染页面
    render() {
        let content = <TestList
          data={this.props.products}
          renderRow={this.renderRow.bind(this)}
          onRefresh={this.onRefresh.bind(this)}
          onEndReached={this.onEndReached.bind(this)}
          isLoadingFail={this.props.isLoadingFail}
          isLoading={this.props.isLoading}
          hasMore={this.props.hasMore}
        />;
        return (
          <View style={commonStyles.tabbarContainer}>
            {this._renderNavBar()}
            {content}
          </View>
        );
    }
}

function select(store) {
    const {products} = store;
    return {
        products: products.products,
        isLoading:products.isLoading,
        isLoadingFail:products.isLoadingFail,
        hasMore:products.hasMore,
        page:products.page,
    };
}

function actions(dispatch) {
    return {
      loadProductsIfNeeded: () => dispatch(loadProductsIfNeeded()),
      refreshProducts: () => dispatch(refreshProducts()),
    };
}

export default connect(select, actions)(TestView);
