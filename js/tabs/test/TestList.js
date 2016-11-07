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
import Loading from '../../common/Loading';
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

	// 挂载完,props变化时
	componentWillReceiveProps(nextProps) {
		if(nextProps.data.length>0){
			this.setState({
				dataSource: cloneWithData(this.state.dataSource, nextProps.data),
			});			
		}
	}

	render() {
		const {onRefresh,renderRow,isLoadingFail,isLoading,onEndReached,renderFooter,data} = this.props;
        if (isLoadingFail){
            // TODO 优化加载失败组件
            return (
                <View>
                    <Text>加载失败！请检查网络</Text>
                </View>
            );
        }
        if (data.length==0){
            // TODO 优化正在加载进度条组件
            return <Loading isLoading={isLoading}/>;
        }		
		//{/* 使用数据源来实例化,接受数据源数组中的每个数据*/}
		let content = <ListView
						ref="listView"
						dataSource={this.state.dataSource}
						renderRow={renderRow}
						onEndReached={onEndReached}
						onEndReachedThreshold={100}
        				renderFooter={this._renderFooter.bind(this)}
                		enableEmptySections={true}
                		initialListSize={10}
                		pageSize={10}
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
    _renderFooter(){
      const {isLoading,hasMore} = this.props;

      return hasMore?<View style={styles.scrollSpinner}><Loading isLoading={isLoading}/></View>:null;
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
	},
	scrollSpinner: {
	  marginVertical: 20,
	},
});