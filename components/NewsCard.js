// components/NewsCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NewsCard = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303134',
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 16,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    color: '#e8eaed',
    fontSize: 16,
    padding: 16,
    lineHeight: 24,
  },
});

export default NewsCard