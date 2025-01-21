import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/SearchBar';
import SearchTextBar from '../components/SearchTextBar';
import Suggestion from '../components/Suggestion';

const SearchResults = (props) => {
  const { query } = props.route.params;
  const [searchKey, setSearchKey] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const mockResults = [
    {
      id: 1,
      title: 'apple',
      description: 'This is a description of the first search result...',
      url: 'www.example.com',
    },
    {
      id: 2,
      title: 'samsung',
      description: 'This is a description of the second search result...',
      url: 'www.example.com',
    },
    {
      id: 3,
      title: 'oppo',
      description: 'This is a description of the third search result...',
      url: 'www.example.com',
    },
    // Add more mock results as needed
  ];


  useEffect(() => {
    if (!searchKey) {
      return setSearchResult([])
    }
    const result = mockResults.filter(res => res.title.toLowerCase().includes(searchKey.toLowerCase()))
    setSearchResult(result)

  }, [searchKey])


  const renderSearchResult = ({ item }) => {
    return <TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.wrapper}>
          <View style={styles.title}>
            <Text style={styles.textStyle}>{item.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>

          <SearchTextBar
            onValueChange={val => setSearchKey(val)}
            Value={searchKey}
            navigation={props.navigation}
            onBackPress={() => props.navigation.goBack()}
          />
          <ScrollView >
            {
              searchResult.map(data => <Suggestion item={data} />)
            }


          </ScrollView>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  cardContainer: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  wrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    width: "100%",
    justifyContent: 'center'
  },
  title: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  textStyle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 4
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    color: '#202124',
  },
  resultsContainer: {
    flex: 1,
    padding: 16,
  },
  resultItem: {
    marginBottom: 24,
  },
  resultUrl: {
    fontSize: 12,
    color: '#5F6368',
    marginBottom: 4,
  },
  resultTitle: {
    fontSize: 16,
    color: '#1a0dab',
    marginBottom: 4,
  },
  resultDescription: {
    fontSize: 14,
    color: '#4d5156',
  },
});

export default SearchResults