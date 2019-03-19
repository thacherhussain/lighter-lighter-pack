import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Container, Header, Content, Button, Text, Left } from 'native-base';

import { AddButton } from '../components/AddButton';

export default class HomeScreen extends React.Component {
  static navigationOptions = {

  };

  render() {
    return (

      <Container contentContainerstyle={styles.main}>
        <Content contentContainerstyle={styles.mainCenter}>
        <Content padder>
          <Text style={styles.text}>Here is some text</Text>
          <Button onPress={showAlert}>
            <Text style={{textAlign: 'center'}}>Click Me!</Text>
          </Button>
          <MonoText>Hello</MonoText>
          <AddButton>AddButton</AddButton>
        </Content>
        </Content>
      </Container>

    );
  }
}


const showAlert = () =>{
   Alert.alert(
      'Alert!'
   )
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  mainCenter: {
    flexDirection:'row',
    justifyContent:'center'
  },
  text: {
    color: '#0F7173',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 50,
  },
});
