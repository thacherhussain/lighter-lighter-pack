import React from 'react';
import {
  Card,
  CardItem,
  Text,
} from 'native-base';

const CharacterDetail = ({ character }) =>  {
  const { name, house, role } = character;
  return (
    <Card>
      <CardItem>
        <Text>{name}</Text>
        <Text>{house}</Text>
        <Text>{role}</Text>
      </CardItem>
    </Card>
  );
};

export default CharacterDetail;
