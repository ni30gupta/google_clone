import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const VoiceSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Icon style={styles.icons} color={'#d1dbe4'} type='antdesign' name='left' size={20} />
        <Icon style={styles.icons} color={'#d1dbe4'} type='feather' name='globe' size={20} />
      </View>
      <View style={styles.speakNow}>
        <Text style={{ fontSize: 26, alignSelf: 'center', color: '#b1b1b1' }}>Speak now</Text>
      </View>
      <View style={styles.animat}>
        <Text style={{ fontSize: 26, alignSelf: 'center', color: 'beige' }}>animation ....</Text>
      </View>
      <View style={styles.searshSong}>
        <Icon color={'#b1b1b1'} type='materialicons' name='music-note' size={18} />

        <Text style={{ fontSize: 14, alignSelf: 'center', marginHorizontal:4, color: '#b1b1b1', fontWeight: 600 }}>Search a song</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  animat: {
    position: 'relative',
    top: '30%'
  },
  speakNow: {
    position: 'relative',
    top: '10%'
  },
  searshSong: {
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor: '#010101',
    // paddingHorizontal:10,
    paddingVertical: 10,
    width: '38%',
    position: 'relative',
    top: '55%',
    alignSelf: 'center',
    borderRadius: 50,
    borderColor: '#b1b1b1',
    borderWidth: 0.7
  },
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
  iconsContainer: {
    marginVertical: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icons: {
    padding: 8,
    backgroundColor: '#676767',
    borderRadius: 30,
  }
})

export default VoiceSearch