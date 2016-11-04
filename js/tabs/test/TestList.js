import React,{Component} from 'react';
import {
	ListView,
	StyleSheet,
	RefreshControl,
	Image,
	View,
} from 'react-native';
// 平台组件
import MyTouchable from '../../common/MyTouchable';
import {Text} from '../../common/MyText';
// actions
import {
	fetchProductsIfNeeded,
} from '../../actions';

export default class TestList extends Component {
	constructor(props) {
	    super(props);
	   
	   // 创建一个ListView.DataSource数据源
	   let dataSource = new ListView.DataSource({
	   		rowHasChanged:(row1,row2) => row1 !== row2,
	   });

	    this.state = {
	    	// 传递一个普通的数据数组
  			dataSource: cloneWithData(dataSource, props.data),
	    };
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.data !== nextProps.data) {
			this.setState({
				dataSource: cloneWithData(this.state.dataSource, nextProps.data),
			});
		}
	}

	render() {
		const {onRefresh,renderRow} = this.props;
		
		//{/* 使用数据源来实例化,接受数据源数组中的每个数据*/}
		let content = <ListView
						ref="listView"
						dataSource={this.state.dataSource}
						renderRow={renderRow}
						renderFooter={()=>{}}
			    		refreshControl={
			              <RefreshControl
			                refreshing={false}
			                onRefresh={onRefresh}
			                title="正在加载中..."
			                titleColor="#000"
			                colors={['#ff0000', '#00ff00', '#0000ff']}
			                progressBackgroundColor="#000"
			              />
			            }
         			/>;
		return (
			<View style={styles.container}>
				{content}
			</View>
		);
	}


}

function cloneWithData(dataSource, data) {
	if (!data) {
		return dataSource.cloneWithRows([]);
	}
	if (Array.isArray(data)) {
		return dataSource.cloneWithRows(data);
	}
	return dataSource.cloneWithRowsAndSections(data);
}

var styles = StyleSheet.create({
	container:{
		flex:1,
	}
});