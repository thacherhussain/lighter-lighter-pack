import React from 'react';
import { Alert } from 'react-native';
import { Button, Text, Icon, Fab } from 'native-base';

export class AddButton extends React.Component {
  render() {
    return (
      // <Button onPress={showAlert}>
      //   <Text>Touch Huuurrrr</Text>
      // </Button>
      <Fab
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={showAlert}
      >
        <Icon name="add" />
      </Fab>

    );
  }
}

const showAlert = () => {
   Alert.alert(
      'Alert!'
   )
}
