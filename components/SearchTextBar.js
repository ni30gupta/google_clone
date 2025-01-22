import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchTextBar = ({ onValueChange, navigation }) => {
  console.log('navigation', navigation)
  const [searchText, setSearchText] = useState('');

  return (<>
    <View style={styles.searchContainer}>
      <Image source={require('../assets/google_logo.jpg')} style={styles.size(40)} />

      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#9AA0A6"
        //   value={searchText}
        onChangeText={(val) => onValueChange(val)}
        selectionColor="#8AB4F8"
        autoFocus
      />

      {/* Right Icons */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('VoiceSearch')} style={styles.iconButton}>
          <Image source={require('../assets/mic.jpg')} style={styles.size(28)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ImageSearch')} style={styles.iconButton}>
          <Image source={require('../assets/Google_Lens_Icon.svg.jpg')} style={styles.size(25)} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.devider} />
  </>
  );
};

const styles = StyleSheet.create({
  size: (px) => ({
    width: px,
    height: px
  }),
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  logo: {
    width: 92,
    height: 30,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 46,
    marginTop: 10

  },
  input: {
    flex: 1,
    color: '#E8EAED',
    fontSize: 16,
    paddingVertical: 8,
    marginRight: 8,
    marginLeft: 10
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  devider: {
    marginTop: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 1,
    width: "94%",
    backgroundColor: '#576250'
  }
});

export default SearchTextBar;