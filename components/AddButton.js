import React from 'react';
import { Alert } from 'react-native';
import { Container, Header, Content, Button, Text} from 'native-base';

export class AddButton extends React.Component {
  render() {
    return (
      <Button onPress={showAlert}>
        <Text>Touch Huuurrrr</Text>
      </Button>
    );
  }
}

const showAlert = () =>{
   Alert.alert(
      'Alert!'
   )
}
