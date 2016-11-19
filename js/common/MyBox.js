import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// common
import commonStyles from '../styles/commonStyles';

export default class MyBox extends Component {

  // 渲染组件
  render() {
        let children = React.Children.map(this.props.children,  (o, i)=>{
            return React.cloneElement(o,{})
        });
    return (
      <View style={commonStyles.box}>
        <View style={commonStyles.boxHead}>
          <Text style={commonStyles.boxTitle}>{this.props.boxTitle}</Text>
        </View>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
