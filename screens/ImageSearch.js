import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import ResizableDraggableRect from '../components/ResizableDraggableComp';
import { useCallback } from 'react';
import { debounce } from 'lodash';

const ImageSearch = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [imageHandler , setImageHandler ] = useState(false)
  const [loading , setLoading ] = useState(false)

  const url = 'https://picsum.photos/150'


  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      console.log('first')
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission to take pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    console.log('selectedImage', selectedImage)
    setImageHandler(true)
    if(!selectedImage){
      setSearchResults([])
    }
  }, [selectedImage])

  
  const pickImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    try {
      const result = await launchImageLibrary(options);
      

      if (result.didCancel) {
        return;
      }

      if (result.errorCode) {
        console.error('ImagePicker Error: ', result.errorMessage);
        return;
      }

      if (result.assets && result.assets[0]) {
        console.log(result.assets[0].uri)
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  const takePhoto = async () => {
    console.log('opening camera')
    const hasPermission = await requestCameraPermission();
    
    if (!hasPermission) {
      return;
    }

    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    try {
      const result = await launchCamera(options);
      
      if (result.didCancel) {
        return;
      }

      if (result.errorCode) {
        console.error('Camera Error: ', result.errorMessage);
        return;
      }

      if (result.assets && result.assets[0]) {
        setSelectedImage(result.assets[0].uri);

      }
    } catch (error) {
      console.error('Error taking photo: ', error);
    }
  };



  const setSimilarResults = async (rect) => {
    // setSearchResults([])
    setLoading(true)
    console.log('first', rect)
    const img1 = await fetch(url)
    console.log(img1.url)
   
    const img2 = await fetch(url)
    console.log(img2.url)
   
    const img3 = await fetch(url)
    console.log(img3.url)
   
    const img4 = await fetch(url)
    console.log(img4.url)
   
   

    setSearchResults([
      { id: 1, title: 'Similar Image 1', url: img1.url },
      { id: 2, title: 'Similar Image 2', url: img2.url },
      { id: 3, title: 'Similar Image 3', url: img3.url },
      { id: 4, title: 'Similar Image 4', url: img4.url },
    ]);
    setLoading(false)
  };

  const throttledSetSimilarResults = useCallback(
    debounce((rect) => setSimilarResults(rect), 500), // Throttle with rect
    []
  );
  const onCropperMove = (rect) => {
    throttledSetSimilarResults(rect);
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Google Lens</Text>
      </View>

      <ScrollView style={styles.content}>
        {selectedImage ? (
          <View style={styles.selectedImageContainer}>
            { imageHandler && <ResizableDraggableRect image={selectedImage} onCropperMove={onCropperMove}/> }
            <TouchableOpacity
              style={styles.minimizeButton}
              onPress={() => setSelectedImage(null)}
            >
              <Icon name="remove" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.uploadContainer}>
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <Icon name="photo-library" size={48} color="#4285F4" />
              <Text style={styles.uploadText}>Choose from gallery</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.uploadButton} onPress={takePhoto}>
              <Icon name="camera-alt" size={48} color="#4285F4" />
              <Text style={styles.uploadText}>Take a photo</Text>
            </TouchableOpacity>
          </View>
        )}

        {(searchResults.length && !loading  ) > 0 &&(
        <View style={styles.resultsContainer}>
            <View style={styles.resultGrid}>
              {searchResults.map((result) => (
                <TouchableOpacity key={result.id} style={styles.resultItem}>
                  <Image
                    source={{ uri: result.url }}
                    style={styles.resultImage}
                  />
                  <Text style={styles.resultTitle}>{result.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        {loading && <Text style={styles.uploadText}>Loading....</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor:'#1f1f1f'

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#576250',
  },
  headerTitle: {
    marginLeft: 'auto',
    marginRight:'auto',
    fontSize: 20,

    fontWeight: '500',
    color:'#fff',
  },
  content: {
    flex: 1,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    alignItems:'center',
    flex:1,
  },
  selectedImageContainer: {
    width: '100%',
    height: 500,
    backgroundColor: '#000',
    position: 'relative',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  minimizeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: '45%',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 16,
  },
  uploadText: {
    marginTop: 12,
    fontSize: 16,
    color: '#5F6368',
    textAlign: 'center',
  },
  resultsContainer: {
    paddingVertical:8,
    paddingHorizontal: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
  },
  resultGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resultItem: {
    width: '48%',
    marginBottom: 16,
  },
  resultImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  resultTitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#202124',
  },
});

export default ImageSearch;