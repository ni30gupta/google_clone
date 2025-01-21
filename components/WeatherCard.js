// components/WeatherCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WeatherCard = ({ type = 'weather', location, temperature, time, value, level }) => {
  return (
    <View style={styles.container}>
      {type === 'weather' ? (
        <>
          <Text style={styles.location}>{location}</Text>
          <View style={styles.weatherInfo}>
            <Text style={styles.temperature}>{temperature}</Text>
            <Icon name={time === 'night' ? 'nights-stay' : 'wb-sunny'} size={24} color="#e8eaed" />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.title}>Air quality · {value}</Text>
          <View style={styles.airQualityInfo}>
            <Text style={styles.level}>{level}</Text>
            <Icon name="waves" size={24} color="#ffd700" />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth:140,
    // backgroundColor: '#303134',
    borderColor:'grey',
    borderWidth:1,
    borderRadius: 12,
    padding: 10,
    margin: 4,
  },
  location: {
    color: '#e8eaed',
    fontSize: 14,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,

    justifyContent:'space-between'
  },
  temperature: {
    color: '#e8eaed',
    fontSize: 20,
    fontWeight:800,
    marginRight: 8,
  },
  title: {
    color: '#e8eaed',
    fontSize: 14,
  },
  airQualityInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  level: {
    color: '#e8eaed',
    fontSize: 20,
    marginRight: 8,
  },
});


export default WeatherCard