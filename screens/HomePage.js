
// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/SearchBar';
import QuickAccess from '../components/QuickAccess';
import WeatherCard from '../components/WeatherCard';
import NewsCard from '../components/NewsCard';
import Settings from '../components/Settings';

const HomePage = ({ navigation }) => {
  const [settingModal, setSettingModal] = useState(false)
  const [newsImages, setNewsImages] = useState([])

  const url = 'https://picsum.photos/150'

  useEffect(() => {
    fetchNewImages()
  }, [])

  const fetchNewImages = async () => {
    for (let i = 0; i < 6; i++) {
      const img = await fetch(url)
      setNewsImages(prev => [...prev, img.url])
    }
  }


  const openSettings = () => {
    setSettingModal(true)
  }

  const closeModal = () => {
    setSettingModal(false)
  }
  return (<>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="science" size={30} color="#8ab4f8" />
        </TouchableOpacity>
        <View style={styles.searchPill}>
          <View style={styles.pill}>
            <Image
              source={require('../assets/google_logo.jpg')}
              style={styles.smallLogo}
            />
            <Text style={styles.searchText}>Search</Text>
          </View>
          <View style={styles.gemini}>
            <Icon name="star" size={28} color="#8ab4f8" />
          </View>
        </View>
        <TouchableOpacity onPress={openSettings} style={styles.avatarButton}>
          <Text style={styles.avatarText}>A</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <Image
          source={require('../assets/googlelogo_light.jpg')}
          style={styles.logo}
        />

        <SearchBar navigation={navigation} />
        <QuickAccess />

        <ScrollView  horizontal style={styles.cardsContainer}>
          <WeatherCard
            location="Gurugram"
            temperature="30°"
            time="night"
          />
          <WeatherCard
            type="airQuality"
            value="170"
            level="Moderate"
          />
          <WeatherCard
            type="airQuality"
            value="170"
            level="Moderate"
          />
          <WeatherCard
            type="airQuality"
            value="170"
            level="Moderate"
          />
        </ScrollView>
        {
          Array(5).fill(null).map((_, index) => {

            return <NewsCard
              image={{ uri: newsImages[index] }}
              title="This superstar was Ratan Tata's closest friend, shared same room, went for picnics, listened songs toge..."
            />
          })
        }

      </View>

      <Modal visible={settingModal} transparent={true} onRequestClose={closeModal} >
        <Settings closeModal={closeModal} />
      </Modal>
    </ScrollView>
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="home" size={24} color="#8ab4f8" />
        <Text style={styles.menuText(true)} >Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="search" size={24} color="#5f6368" />
        <Text style={styles.menuText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="bookmarks" size={24} color="#5f6368" />
        <Text style={styles.menuText}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="notifications-none" size={24} color="#5f6368" />
        <Text style={styles.menuText} >Notifications</Text>
      </TouchableOpacity>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  searchPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    paddingHorizontal: 8,
    // paddingVertical: 16,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 16,
    width: '50%',
    justifyContent: 'space-between',
  },
  smallLogo: {
    width: 28,
    height: 28,
  },
  searchText: {
    color: '#e8eaed',
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  avatarButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8ab4f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#202124',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainContent: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 160,
    height: 50,
    marginVertical: 20,
    color: "white"
  },
  cardsContainer: {

    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#3c4043',
    backgroundColor: '#202124',
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  menuText: (active) => ({
    fontSize: 12,
    fontWeight: '700',
    color: active ? '#8ab4f8' : 'red'
  }),
  pill: {
    width: '70%',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row'

  },
  gemini: {
    width: 28,
    marginLeft: 6,
  }
});



export default HomePage

