import React,{Component} from 'react';
import {
	ListView,
	StyleSheet,
	RefreshControl,
	Image,
	View,
} from 'react-native';

// 平台组件
import {Text} from '../../common/MyText';
import Loading from '../../common/Loading';

// 助手
import {getImage} from '../../helpers/getImage';

// 第三方组件
import { List, ListItem, Icon } from 'react-native-elements'

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

    // 渲染组件
	render() {
		const {onRefresh,isLoadingFail,isLoading,onEndReached,renderFooter,data} = this.props;
        if (isLoadingFail){
            // TODO 优化加载失败组件
            return (
                <View>
                    <Text>加载失败！请检查网络</Text>
                </View>
            );
        }
        return (
        	<List containerStyle={{marginTop:0,marginBottom:60}}>
				<ListView
					ref="listView"
					style={{backgroundColor:'#fff'}}
					dataSource={this.state.dataSource}
					renderRow={(rowData, sectionID)=>this._renderRow(rowData, sectionID)}
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
		            }/>
        	</List>
        );
		//{/* 使用数据源来实例化,接受数据源数组中的每个数据*/}
	}

    // 渲染列表项
    _renderRow(rowData, sectionID){
    	const {handlePressCell} = this.props;
      return (
        <ListItem
          roundAvatar
          key={sectionID}
          title={rowData.name}
          subtitle={rowData.sub_name}
          avatar={{uri:getImage(rowData.logo)}}
          onPress={(row)=>handlePressCell(row)}
        />
      );
    }

    // 渲染列表底部
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
	scrollSpinner: {
	  marginVertical: 20,
	},
});