import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'native-base';

import axios from 'axios';
import CharacterDetail from './CharacterDetail';

class CharacterList extends Component {
  state = { characters: [] };

  // componentWillMount() {
  //   fetch('https://rallycoding.herokuapp.com/api/music_albums')
  //     .then(response => response.json())
  //     .then(responseData => this.setState({ characters: responseData }));
  // }

  componentWillMount() {
    fetch('https://potterverse.herokuapp.com/data/characters_basic')
      .then(response => response.json())
      .then(responseData => this.setState({ characters: responseData.charactersBasic }));
  }

  renderCharacters() {
    return this.state.characters.map(character =>
      <CharacterDetail key={character.name} character={character} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderCharacters()}
      </ScrollView>
    );
  }
}

export default CharacterList;
