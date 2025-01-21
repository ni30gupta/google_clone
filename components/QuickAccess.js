// components/QuickAccess.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QuickAccess = () => {
  const items = [
    { icon: 'image', label: 'Images', color: '#9aa0a6' },
    { icon: 'translate', label: 'Translate', color: '#8ab4f8' },
    { icon: 'school', label: 'Education', color: '#34a853' },
    { icon: 'music-note', label: 'Music', color: '#ea4335' },
  ];

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
            <Icon name={item.icon} size={24} color={item.color} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  item: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QuickAccess