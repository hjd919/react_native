import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import {
  Button,
  Icon,
  List,
  ListItem,
} from 'react-native-elements'

export default class RNElements extends Component{
	render(){
		const list = [
		  {
		    name: 'Amy Farha',
		    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		    subtitle: 'Vice President'
		  },
		  {
		    name: 'Chris Jackson',
		    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		    subtitle: 'Vice Chairman'
		  },
		]
		return (
			<View>
				<Button
				  raised
				  icon={{name: 'cached'}}
				  title='RAISED WITH ICON' />

				<Icon
				  raised
				  name='heartbeat'
				  type='font-awesome'
				  color='#f50'
				  onPress={() => console.log('hello')} />

				<List containerStyle={{marginBottom: 20}}>
				  {
				    list.map((l, i) => (
				      <ListItem
				        roundAvatar
				        avatar={{uri:l.avatar_url}}
				        key={i}
				        title={l.name}
				      />
				    ))
				  }
				</List>

			</View>
			
		);
	}
}