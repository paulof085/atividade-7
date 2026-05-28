import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export interface Movie {
  id: string;
  name: string;
  rating: number;
  category: string;
  image: string;
}

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const isFeatured = movie.rating > 8;

  return (
    <View style={[styles.card, isFeatured && styles.featuredCard]}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={[styles.title, isFeatured && styles.featuredTitle]}>{movie.name}</Text>
          <Text style={[styles.rating, isFeatured && styles.featuredRating]}>
            {movie.rating.toFixed(1)}
          </Text>
        </View>
        <Text style={styles.category}>{movie.category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  featuredCard: {
    borderColor: '#ffba08',
    borderWidth: 2,
    backgroundColor: '#fff7e6',
  },
  image: {
    width: 110,
    height: 150,
  },
  textContainer: {
    flex: 1,
    padding: 14,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    flex: 1,
  },
  featuredTitle: {
    color: '#b45309',
  },
  rating: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563eb',
  },
  featuredRating: {
    color: '#b45309',
  },
  category: {
    marginTop: 8,
    fontSize: 14,
    color: '#475569',
    fontWeight: '500',
  },
});
