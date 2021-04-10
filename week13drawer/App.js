import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import RainScreen from './components/Rainscreen';
import SunScreen from './components/Sunscreen';
import 'react-native-screens';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sunny Day" component={SunScreen} />
        <Drawer.Screen name="Rainy Day" component={RainScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;