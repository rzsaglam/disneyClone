import {View, Image} from 'react-native';
import React from 'react';
import styles from './PopularCard.style';

const PopularCard = ({data}) => {
  let url = 'https://image.tmdb.org/t/p/original/' + data.poster_path;
  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={{uri: url}} />
    </View>
  );
};

export default PopularCard;
