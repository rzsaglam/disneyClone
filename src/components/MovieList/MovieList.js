import {View, FlatList, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './MovieList.style';
import {getMoviesByGenre} from '../../utils/getMovieData';

const MovieList = ({genre = 'action'}) => {
  console.log(genre);
  const [movies, setMovies] = useState();
  useEffect(() => {
    getMoviesByGenre(genre).then(res => setMovies(res));
  }, [genre]);
  useEffect(() => {
    console.log(movies);
  }, [movies]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{genre}</Text>
      {movies && (
        <FlatList
          numColumns={2}
          data={movies}
          renderItem={({item}) => (
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
              }}
            />
          )}
        />
      )}
    </View>
  );
};

export default MovieList;
