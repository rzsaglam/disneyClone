import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './Home.style';
import PopularList from '../../components/PopularList';
import GenreButton from '../../components/GenreButton/GenreButton';
import MovieList from '../../components/MovieList';

const Home = () => {
  const [genre, setGenre] = useState('Action');
  return (
    <View style={styles.container}>
      <PopularList />
      <View style={styles.section}>
        <GenreButton genre={'Action'} onPress={() => setGenre('Action')} />
        <GenreButton genre={'Drama'} onPress={() => setGenre('Drama')} />
        <GenreButton genre={'Crime'} onPress={() => setGenre('Crime')} />
        <GenreButton genre={'Comedy'} onPress={() => setGenre('Comedy')} />
      </View>
      <MovieList genre={genre} />
    </View>
  );
};

export default Home;
