import React from 'react';
import CharacterList from '../components/CharacterList';
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
          <CharacterList />
        </Content>

      </Container>

    );
  }
}
