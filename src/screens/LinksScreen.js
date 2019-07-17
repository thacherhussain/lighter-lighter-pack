import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Right,
  Content,
  Text,
  Button,
  Form,
  Item,
  Input,
} from 'native-base';
import { Provider } from 'react-redux';

import TodoApp from '../components/TodoApp';
import store from '../store';

import FullWidthButton from '../components/FullWidthButton';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    // title: 'Links',
    header: null,
  };


  render() {
    return (
      <Container>
      <Header>
        <Left />
        <Body>
          <Title>Links</Title>
        </Body>
        <Right />
      </Header>
        <Content padder>
          <FullWidthButton
            onPress={() => this.props.navigation.navigate('HomeStack')}
            title="FullWidthButton"
            />
          
          <Button
            block
            onPress={() => this.props.navigation.navigate('HomeStack')}
            style={[styles.button]}
            >
            <Text>Home</Text>
          </Button>
          <Button
            success
            block
            onPress={() => this.props.navigation.navigate('GearStack')}
            style={[styles.button]}>
              <Text>Gear</Text>
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
    backgroundColor: 'red',
  },
  pinkButton: {
    backgroundColor: '#E2564C',
  },
});
