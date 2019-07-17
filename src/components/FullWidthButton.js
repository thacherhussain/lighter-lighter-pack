import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from "prop-types";

import { Button, Text, Icon, Fab } from 'native-base';

class FullWidthButton extends React.Component {

  onPress = () => {
    const { navigateSignUpCreateAccount } = this.props;
    navigateSignUpCreateAccount();
  };

  render() {
    return (
      <Button
        block
        onPress={this.onPress}
        style={[styles.button]}
        >
        <Text>{this.title}</Text>
      </Button>
    );
  }


}

FullWidthButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
  },
});

export default FullWidthButton;
