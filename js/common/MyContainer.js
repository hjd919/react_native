import React,{Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

// common
import commonStyles from '../styles/commonStyles';

// 第三方插件
import NavBar from 'react-native-navbar';

export default class MyContainer extends Component {

  // 渲染导航条
  _renderNavBar(){
    let {title} = this.props;
    let rightButtonConfig = this.props.rightButtonConfig;
    let leftButtonConfig = this.props.leftButtonConfig;
    let propsData = {};
    if(!rightButtonConfig){
      rightButtonConfig = (<View></View>);
    }
    if(!leftButtonConfig){
      leftButtonConfig = (<View></View>);
    }
    return(
      <NavBar
        style={commonStyles.navbar}
        title={{title:title}}
        leftButton={leftButtonConfig}
        rightButton={rightButtonConfig}
      />
    );
  }

  // 渲染页面
  render() {
        let children = React.Children.map(this.props.children,  (o, i)=>{
            return React.cloneElement(o,{})
        });
    return (
        <View style={{backgroundColor:'#E8EDF1'}}>
          {this._renderNavBar()}
          {children}
        </View>
    );
  }
}

const styles = StyleSheet.create({
});
