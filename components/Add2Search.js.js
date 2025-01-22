import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Add2Search = ({ onValueChange, navigation, image }) => {

  return (<>
    <View style={styles.searchContainer}>
      <Image source={require('../assets/google_logo.jpg')} style={styles.size(40)} />

      <Image style={{ borderRadius: 8, height: 35, width: 40 }} source={{ uri: image }} />
      <TextInput
        style={styles.input}
        placeholder="Add to your search"
        placeholderTextColor="#9AA0A6"
        onChangeText={(val) => onValueChange(val)}
        selectionColor="#8AB4F8"
        autoFocus
      />

      {/* Right Icons */}
      <View style={styles.iconsContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('VoiceSearch')} style={styles.iconButton}>
          <Image source={require('../assets/mic.jpg')} style={styles.size(28)} />

        </TouchableOpacity>
      </View>
    </View>

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
    backgroundColor: '#2b2b2b',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 46,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 50
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

export default Add2Search;