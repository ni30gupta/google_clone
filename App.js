// App.tsx
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from './screens/HomePage';
import SearchResults from './screens/SearchResults';
import ImageSearch from './screens/ImageSearch';
import { LogBox, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import VoiceSearch from './screens/VoiceSearch';



const Stack = createNativeStackNavigator();

const App = () => {

    // Optional: Ignore specific navigation warnings if they're not critical
    useEffect(() => {
      LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);
    }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaProvider style={{ marginTop: 20 }}>
          <StatusBar
            backgroundColor="#1f1f1f"
            barStyle="light-content"
            translucent={true}
          />
          <Stack.Navigator 
            screenOptions={{ headerShown: false }} 
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="SearchResults" component={SearchResults} />
            <Stack.Screen name="ImageSearch" component={ImageSearch} />
            <Stack.Screen name="VoiceSearch" component={VoiceSearch} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default App;