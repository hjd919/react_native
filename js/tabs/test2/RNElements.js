import NavigationBar from 'react-native-navbar'
import Lightbox from 'react-native-lightbox'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  DatePickerIOS,
  Modal,
  ActivityIndicator,
  Picker,
  ProgressViewIOS,
  SegmentedControlIOS,
} from 'react-native'

import {
  Button,
  Icon,
  List,
  ListItem,
  SearchBar,
} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import CommonStyles from '../../common/styles/CommonStyles';

export default class RNElements extends Component{
  componentDidMount() {
  }
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
            <View style={CommonStyles.tabbarContainer}>{/*
              <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                  <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                  <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                  <Text style={styles.text}>And simple</Text>
                </View>
              </Swiper>*/}
            <SearchBar
              lightTheme
              round
              autoFocus={true}
              onChangeText={()=>{}}
              focus={()=>{}}
              placeholder='搜索热门' />
            <ActivityIndicator
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              animating={true}
              size={'small'}
              color={'black'}
            />
            <Picker 
              style={{
                width: 100,
              }}
              selectedValue={(this.state && this.state.pickerValue) || 'a'}
              onValueChange={(value) => {
                this.setState({value})
              }}>
              <Picker.Item label={'Hello'} value={'a'} />
              <Picker.Item label={'World'} value={'b'} />
            </Picker>
            <ProgressViewIOS 
              style={{
                margin: 20,
                width: 100,
              }}
              progress={50 / 100}
              progressTintColor={"rgba(74,144,226,1)"} 
            />
            <SegmentedControlIOS 
              values={['A', 'B', 'C']}
              momentary={true}
              tintColor={'black'}
              style={{
                width: 100,
              }}
              selectedIndex={2}
              onValueChange={(value) => {}}
              onChange={(event) => {
                this.setState({
                  scIndex: event.nativeEvent.selectedSegmentIndex
                })
              }}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                backgroundColor: "rgba(74,144,226,1)",
              }}>
            </View>
            <NavigationBar
              title={{ title: 'Title', tintColor: 'black', }}
              leftButton={{ title: 'Back', }}
              rightButton={{ title: 'Forward', }}
              style={{ backgroundColor: "white", }}
              statusBar={{ tintColor: "white", }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'Helvetica Neue',
              }}>
              My Text
            </Text>
            {/*
            <View> 
              <Modal 
                animated={true}
                transparent={false}
                visible={(this.state && this.state.modalVisible) || true }>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#f5fcff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                  }}>
                  <Text>Hello Modal</Text>
                </View>
              </Modal>
            </View>
            */}
                <Lightbox navigator={this.props.navigator}>
                  <Image 
                    style={{
                      height: 200, 
                      width: 300,
                    }}
                    source={{uri:'https://unsplash.it/600/400/?random'}}
                  />
                </Lightbox>
                <DatePickerIOS 
                  date={(this.state && this.state.date) || new Date()}
                  onDateChange={(newDate) => {
                    this.setState({date: newDate})
                  }}
                  mode={'datetime'}
                  timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()}
                />
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
var styles = StyleSheet.create({
   wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  } 
});