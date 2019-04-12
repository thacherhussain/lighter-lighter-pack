import React from 'react';
import { View, Image } from 'react-native';
import {
  Card,
  CardItem,
  Text,
} from 'native-base';

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
          <Text>{image_url}</Text>
        </CardItem>
        <CardItem>
          <Text>House: {house}</Text>
        </CardItem>
        <CardItem>
          <Text>Role: {role}</Text>
        </CardItem>
    </Card>
  );
};

const styles = {
  nameTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 15,
    whiteSpace: 'pre-line',
  }
}

export default CharacterDetail;
