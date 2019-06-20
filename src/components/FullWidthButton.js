import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from "prop-types";

import { Button, Text, Icon, Fab } from 'native-base';

class FullWidthButton extends React.Component {


  render() {
    return (
      <Button
        block
        onPress={onPress}
        style={[styles.button]}
        >
        <Text>Home</Text>
      </Button>
    );
  }


}

FullWidthButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
  },
});

export default FullWidthButton;
