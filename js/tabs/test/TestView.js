import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import {
    refreshProducts,
    loadProductsIfNeeded,
} from '../../actions';
import TestList from './TestList';
import TestCell from './TestCell';
import TestDetail from './TestDetail';
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
      const {refreshProducts,loadProductsIfNeeded} = this.props;
      refreshProducts();
      loadProductsIfNeeded();
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
          handlePressCell={this.handlePressCell.bind(this,row)}
        />
      );
    }

    handlePressCell(row){
      const nextRoute = {
        component: TestDetail,
        title: row.name,
        passProps: { row : row }
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
        return (<View style={styles.container}>{content}</View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:70
    },
    scrollSpinner: {
      marginVertical: 20,
    },
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
    };
}

export default connect(select, actions)(TestView);
