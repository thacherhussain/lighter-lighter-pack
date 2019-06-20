import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Left, Body, Right, Icon, Title, Button } from 'native-base';

import FullWidthButton from '../components/FullWidthButton';
import AddButton from '../components/AddButton';

class MyCustomHeaderBackImage extends React.Component {
  render() {
    const source = require('../../assets/images/icon.png');
    return (
      <Image
        source={source}
        style={[styles.myCustomHeaderBackImage, this.props.style]}
      />
    );
  }
}

class GearScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Details",
    headerBackTitle: null,
  };


  render() {
    return (


      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Gear Hello Screen</Text>
        <Button
          block
          info
          onPress={() => this.props.navigation.navigate('Details')}
          style={[styles.button]}>
          <Text>Details</Text>
        </Button>
        <Button
          block
          onPress={() => this.props.navigation.navigate('HomeStack')}
          style={[styles.button]}
          >
          <Text>Home</Text>
        </Button>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Details",
    headerBackImage: (
        <MyCustomHeaderBackImage />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Gear: GearScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Gear"
  },
  {
    navigationOptions: {
      headerBackImage: MyCustomHeaderBackImage,
  },
  }
);

const styles = StyleSheet.create({
  myCustomHeaderBackImage: {
    height: 24,
    width: 24,
    marginLeft: 9,
    marginRight: 12,
    marginVertical: 12,
    resizeMode: 'contain',
  },
  myCustomHeaderBackImageAlt: {
    tintColor: '#f00',
  },
  button: {
    margin: 5,
  },
});

export default createAppContainer(AppNavigator);
