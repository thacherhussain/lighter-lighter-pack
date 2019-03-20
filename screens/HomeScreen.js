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

import TodoApp from '../components/TodoApp'
import store from '../store'
import { Provider } from 'react-redux'

import { WebBrowser } from 'expo';

import { Container, Header, Content, Button, Text } from 'native-base';

export default class HomeScreen extends React.Component {
  static navigationOptions = {

  };

  render() {
    return (

      <Container>
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#0F7173',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 50,
  },
});
