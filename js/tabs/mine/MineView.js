import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
// common
import colors from '../../configs/colors.json';
import MyTouchable from '../../common/MyTouchable';
import MyContainer from '../../common/MyContainer';
// redux
import { connect } from 'react-redux';
import {
} from '../../actions';
// 第三方插件
import { List, ListItem, Icon } from 'react-native-elements'

class MineView extends Component {

  // 渲染页面
  render() {
    let profile = (
          <MyTouchable onPress={() => console.log(123)}>
            <View style={styles.loginButton}>
              <Icon 
                name='account-circle' 
                size={66}
                color="#ADB0B6" 
                containerStyle={{marginRight:10}}
                iconStyle={{marginLeft:10}}
              />
              <Text style={styles.loginButtonText}>点击登录账号</Text>
            </View>
          </MyTouchable>
    );

    let list = [{
        title: '我喜欢的',
        icon: 'av-timer'
      }];

    let content = (
        <MyContainer
          title="我的"
        >
        <View style={{width:100,height:20}}></View>
        {profile}
        <List containerStyle={{padding:10,borderColor:'#fff',backgroundColor:'#fff'}}>
          {
            list.map((item, i) => (
              <ListItem
                containerStyle={{borderWidth:0}}
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress={()=>console.log('hello')}
              />
            ))
          }
        </List>
        </MyContainer>
      );
    return content;
  }
}

const styles = StyleSheet.create({
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
  },
  loginButtonIcon:{
    // marginRight:10,
  },
  loginButtonText:{
    // color:colors.black3,
    color:'#666',
    fontSize:18,
  }
});

function select(store){
  return {
  };
}

function actions(dispatch){
  return {
    loadConfig:()=>dispatch(loadConfig())
  };
}

export default connect(select,actions)(MineView);
