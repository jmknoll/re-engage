import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

import {
  WHITE,
  DARK_GREY,
  MEDIUM_GREY,
  LIGHT_GREY
} from '../../shared/constants';

import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class OnboardingSwiper extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          title: 'Find your Politicians',
          subtitle: "Simply input your location and we'll automatically provide you with a list of your representatives, from the local to the federal level",
          illustration: require('../../assets/wifi.png')
        },
        {
          title: 'Get Informed',
          subtitle: "Learn your representatives' stances on issues that matter to you, and find out where their priorities really lie.",
          illustration: require('../../assets/phone_intro.png')
        },
        {
          title: 'Stay Aware',
          subtitle: "We'll alert you to important upcoming votes on issues that you care about, so that you can get in touch with your representatives and make your  voice heard.",
          illustration: require('../../assets/secure.png')
        },
      ],
      height: 1,
      width: 1,
      activeSlide: 0,
    }

    this._renderItem = this._renderItem.bind(this);
    this._onSnapToItem = this._onSnapToItem.bind(this);
  }

  componentDidMount() {
    var {height, width} = Dimensions.get('window');
    this.setState({
      height: height,
      width: width,
    })
  }

  _renderItem({item, index}) {
    return(
      <View style={styles.slide}>
        <Image source={item.illustration} />
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.textBody}>{item.subtitle}</Text>
      </View>
    )
  }

  _onSnapToItem(index) {
    this.setState({activeSlide: index})
  }

  render() {
    const { activeSlide } = this.state;
    return(
      <View style={styles.container}>
        <Carousel layout={'default'}
          data={this.state.data}
          renderItem={this._renderItem}
          itemWidth={this.state.width}
          sliderWidth={this.state.width}
          sliderHeight={this.state.height}
          itemHeight={this.state.height}
          onSnapToItem={this._onSnapToItem}
        />
        <Pagination 
          activeDotIndex={activeSlide}
          dotsLength={3}
          dotStyle={{width: 10, height: 10, borderRadius: 5, marginRight: 0, marginLeft: 0}}
          inactiveDotScale={1.0}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: WHITE,
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: MEDIUM_GREY,
    shadowRadius: 1,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    height: '100%'
  },
  text: {
    color: DARK_GREY,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    width: '75%',
  },
  textBody: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center'
  }
})