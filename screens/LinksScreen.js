import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

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
          <Button block onPress={showAlert} style={styles.button}>
            <Text style={{textAlign: 'center'}}>Click Me!</Text>
          </Button>
        </Content>
        <Content padder>
          <Button
            block
            onPress={() => this.props.navigation.navigate('HomeStack')}
            style={styles.otherButton}>
              <Text>Home</Text>
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
  otherButton: {
    backgroundColor: '#E2564C',
  },
  contentSpacing: {
    justifyContent: 'space-between',
  },
});
