import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

// import { WebBrowser } from 'expo';

import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
} from 'native-base';

import TodoApp from '../components/TodoApp';
import store from '../store';

export default class HomeScreen extends React.Component {
  static navigationOptions = {

  };

  render() {
    return (

      <Container>
        <Content padder>
          <Text>Hello</Text>
        </Content>
      </Container>

    );
  }
}


const styles = StyleSheet.create({
  redButton: {
  backgroundColor: '#BF3A2C',
  margin: 5,
  },
});
