import React,{Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

// common
import commonStyles from '../../styles/commonStyles';
import colors from '../../configs/colors.json';
import MyTouchable from '../../common/MyTouchable';

// redux
import { connect } from 'react-redux';
import {
} from '../../actions';
// 第三方插件
import NavBar from 'react-native-navbar';
import { List, ListItem, Icon } from 'react-native-elements'

export default class MyContainer extends Component {
    // 渲染导航条
    _renderNavBar(){
      return(
        <NavBar
          style={commonStyles.navbar}
          title={{title:"我的"}}
        />
      );
    }

  // 渲染页面
  render() {
    let profile = 
      <MyTouchable onPress={() => console.log(123)}>
        <View style={styles.loginButton}>
          <Icon 
            name='account-circle' 
            size={66}
            color="#ADB0B6" 
            containerStyle={styles.loginButtonIcon}/>
          <Text style={styles.loginButtonText}>点击登录账号</Text>
        </View>
      </MyTouchable>;

    let list = [{
        title: '我喜欢的',
        icon: 'av-timer'
      }];

    let content = 
        <List style={{padding:10}}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress={()=>console.log('hello')}
              />
            ))
          }
        </List>;
    return (
        <View >
          {this._renderNavBar()}
          {profile}
          {content}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:10,
    paddingBottom:10,
    marginTop:20,
    borderTopColor:'#bdc6cf',
    borderBottomColor:'#bdc6cf',
    borderBottomWidth:1,
    borderTopWidth:1,
  },
  loginButtonIcon:{
    marginRight:10,
  },
  loginButtonText:{
    color:colors.black3,
    fontSize:18,
  }
});

export default connect(select,actions)(MineView);
