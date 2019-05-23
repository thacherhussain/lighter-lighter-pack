import React from 'react';
import CharacterList from '../components/CharacterList';
import { View, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Right,
  Content,
  Text,
  Card,
  CardItem,
  Button,
} from 'native-base';

import axios from 'axios';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button
            info
            block
            onPress={() => this.props.navigation.navigate('LinksStack')}
            style={[styles.button]}>
              <Text>Links</Text>
          </Button>
          <Button
            success
            block
            onPress={() => this.props.navigation.navigate('GearStack')}
            style={[styles.button]}>
              <Text>Gear</Text>
          </Button>
          <CharacterList />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});
