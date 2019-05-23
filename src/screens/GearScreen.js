import React from 'react';
import { StyleSheet } from 'react-native';
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
} from 'native-base';

export default class GearScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
      <Header>
        <Left />
        <Body>
          <Title>Gear</Title>
        </Body>
        <Right />
      </Header>
        <Content padder>

          <Button
            block
            onPress={() => this.props.navigation.navigate('HomeStack')}
            style={[styles.button]}>
              <Text>Home</Text>
          </Button>
          <Button
            info
            block
            onPress={() => this.props.navigation.navigate('LinksStack')}
            style={[styles.button]}>
              <Text>Links</Text>
          </Button>

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
