import React from 'react';
import { View, Image } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Button,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const CharacterDetail = ({ character }) =>  {
  const { name, house, role, image_url } = character;
  return (
    <Card>
        <CardItem header>
          <Text>{name}</Text>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: image_url}} style={{height: 400, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Text>House: {house}</Text>
        </CardItem>
        <CardItem>
          <Text>Role: {role}</Text>
        </CardItem>
        <View style={{ flexDirection:'row' }}>
          <Button info style={styles.button}><Text> Edit </Text></Button>
          <Button danger style={styles.button}><Text> Delete </Text></Button>
        </View>
    </Card>
  );
};

const styles = {
  nameTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 15,
    whiteSpace: 'pre-line',
  },
  button: {
    margin: 10
  }
}

export default CharacterDetail;
