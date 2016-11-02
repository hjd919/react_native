import React from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

function MyTouchableIOS(props){
  return (
    <TouchableHighlight
      accessibilityTraits="button"
      underlayColor="#3C5EAE"
      {...props}
    />
  );
}

const MyTouchable = Platform.OS === 'android'
  ? TouchableNativeFeedback
  : MyTouchableIOS;

export default MyTouchable;
