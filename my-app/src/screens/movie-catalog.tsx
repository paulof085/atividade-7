import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import MovieCard, { Movie } from '@/components/movie-card';
import MovieFilter from '@/components/movie-filter';

const MOVIES: Movie[] = [
  {
    id: '1',
    name: 'A Jornada do Herói',
    rating: 8.7,
    category: 'Ação',
    image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: 'Noite de Mistério',
    rating: 7.9,
    category: 'Drama',
    image: 'https://images.unsplash.com/photo-1542204631-7c7a94d8a3b5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    name: 'Risos no Cinema',
    rating: 8.4,
    category: 'Comédia',
    image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '4',
    name: 'Viagem ao Espaço',
    rating: 9.2,
    category: 'Sci-Fi',
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '5',
    name: 'Contos da Floresta',
    rating: 7.4,
    category: 'Fantasia',
    image: 'https://images.unsplash.com/photo-1445820132545-66a6139a8e71?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '6',
    name: 'Drama Urbano',
    rating: 8.9,
    category: 'Drama',
    image: 'https://images.unsplash.com/photo-1463145612447-3bfa7568a407?auto=format&fit=crop&w=400&q=80',
  },
];

const CATEGORIES = ['All', 'Ação', 'Drama', 'Comédia', 'Fantasia', 'Sci-Fi'];

export default function MovieCatalogScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMovies = useMemo(
    () =>
      selectedCategory === 'All'
        ? MOVIES
        : MOVIES.filter((movie) => movie.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Catálogo de Filmes</Text>
        <Text style={styles.subtitle}>Filtre por categoria e descubra os filmes com nota alta.</Text>
      </View>

      <MovieFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum filme encontrado.</Text>}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#475569',
  },
  listContent: {
    paddingBottom: 40,
    paddingTop: 8,
  },
  emptyText: {
    marginTop: 36,
    textAlign: 'center',
    color: '#64748b',
    fontSize: 16,
  },
});
