import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Header, Content, Button, Text, Form, Item, Input } from 'native-base';
import { Provider } from 'react-redux';

import TodoApp from '../components/TodoApp';
import store from '../store';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    // title: 'Links',
    header: null,
  };


  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button block onPress={showAlert} style={[styles.button, styles.redButton]}>
            <Text style={{ textAlign: 'center' }}>Click Me!</Text>
          </Button>
          <Button
            block
            onPress={() => this.props.navigation.navigate('HomeStack')}
            style={[styles.button, styles.pinkButton]}>
              <Text>Home</Text>
          </Button>
        
          <Provider store={store}>
            <TodoApp />
          </Provider>

          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button
            block
            onPress={() => this.props.navigation.navigate('LinksStack')}>
            <Text style={{ textAlign: 'center' }}>Sign In</Text>
          </Button>


        </Content>
      </Container>
    );
  }
}

const showAlert = () => {
   Alert.alert(
      'Alert!'
   );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
  },
  redButton: {
    backgroundColor: '#BF3A2C',
  },
  pinkButton: {
    backgroundColor: '#E2564C',
  },
});
