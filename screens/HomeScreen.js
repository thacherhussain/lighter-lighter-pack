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

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
 } from 'native-base';

export default class HomeScreen extends React.Component {
  static navigationOptions = {

  };

  render() {
    return (

      <Container>
        <Content padder>
          <Provider store={store}>
            <TodoApp />
          </Provider>

          <Button
            block
            onPress={() => this.props.navigation.navigate('LinksStack')}
            style={styles.button}>
            <Text style={{textAlign: 'center'}}>Links</Text>
          </Button>
          <Form>
            <Item>
              <Input placeholder="Username"/>
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button
            block
            onPress={() => this.props.navigation.navigate('LinksStack')}>
            <Text style={{textAlign: 'center'}}>Sign In</Text>
          </Button>
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
  button: {
  backgroundColor: '#BF3A2C',
  },
});
