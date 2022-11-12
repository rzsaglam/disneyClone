import {View, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPopular} from '../../utils/getMovieData';
import styles from './PoplularList.style';
import PopularCard from '../PopularCard/PopularCard';

const PopularList = () => {
  const [populars, setPopluars] = useState();
  useEffect(() => {
    getPopular().then(res => setPopluars(res));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular</Text>
      {populars && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={populars}
          renderItem={({item}) => <PopularCard data={item} />}
          horizontal={true}
        />
      )}
    </View>
  );
};

export default PopularList;
