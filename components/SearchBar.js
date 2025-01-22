// components/SearchBar.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';



const SearchBar = ({navigation}) => {

  const textSearch =()=> {
    // props.props.navigation.navigate('SearchResults')
    
    navigation.navigate('SearchResults', params={})
  }
  
  const voiceSearch =()=> {
    navigation.navigate('VoiceSearch')

  }
  
  const cameraSearch =()=> {
    console.log('camera')
    navigation.navigate('ImageSearch', params={})

  }
  
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons name="search" size={30} color="#9aa0a6" />
      </TouchableOpacity>
      <TouchableOpacity  onPress={textSearch}  style={styles.spacer} >
        <Text style={{fontSize:24}}>Search</Text>
      </TouchableOpacity>
      <View style={styles.features}>
        <TouchableOpacity onPress={voiceSearch} >
          <MaterialIcons name="mic" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={cameraSearch}>
          <MaterialIcons name="camera-alt" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    paddingHorizontal: 20,
    borderRadius: 50,
    width: '100%',
  },
  features: {
    width: '28%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical:20
  },
  spacer: {
    flex: 1,
    paddingHorizontal:10,
  },
});

export default SearchBar