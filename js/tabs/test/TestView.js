import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import {
    refreshProducts,
    loadProductsIfNeeded,
    incrPage,
} from '../../actions';
import TestList from './TestList';
import TestCell from './TestCell';
// import MyButton from '../../common/MyButton';

class TestView extends Component {
    constructor(props) {
      // 初始化
      super(props);
    
      this.state = {};
    }

    // 组件挂载完
    componentDidMount() {
      // 加载列表
      this.props.loadProductsIfNeeded();
    }

    // 组件挂载完，页面store变化时调用,如选择分类
    // componentWillReceiveProps(nextProps){
    //     if(this.props.products !== nextProps.products){
    //         this.props.loadProductsIfNeeded();
    //     }
    // }

    // 渲染列表项
    renderRow(row){
      return (
        <TestCell
          row={row}
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
      const {hasMore,isLoading,loadProductsIfNeeded,page,incrPage} = this.props;
      if(!hasMore || isLoading){
        return;
      }
      incrPage();
      loadProductsIfNeeded();
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
        />;
        return (<View style={styles.container}>{content}</View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

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
      incrPage: () => dispatch(incrPage()),
    };
}

module.exports = connect(select, actions)(TestView);
// export default connect(select, actions)(TestView);
