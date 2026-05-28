import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface MovieFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function MovieFilter({ categories, selectedCategory, onSelectCategory }: MovieFilterProps) {
  return (
    <View style={styles.container}>
      {categories.map((category) => {
        const isSelected = category === selectedCategory;
        return (
          <Pressable
            key={category}
            onPress={() => onSelectCategory(category)}
            style={[styles.button, styles.buttonSpacing, isSelected && styles.buttonSelected]}>
            <Text style={[styles.buttonText, isSelected && styles.buttonTextSelected]}>
              {category}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 18,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#f1f5f9',
  },
  buttonSpacing: {
    marginLeft: 10,
  },
  buttonSelected: {
    backgroundColor: '#2563eb',
  },
  buttonText: {
    color: '#0f172a',
    fontWeight: '600',
  },
  buttonTextSelected: {
    color: '#ffffff',
  },
});
