import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import RainScreen from './components/Rainscreen';
import SunScreen from './components/Sunscreen';
import 'react-native-screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sunny Day" component={SunScreen} />
        <Stack.Screen name="Rainy Day" component={RainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;