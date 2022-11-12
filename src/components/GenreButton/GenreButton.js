import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './GenreButton.style';

const GenreButton = ({genre, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{genre}</Text>
    </TouchableOpacity>
  );
};

export default GenreButton;
