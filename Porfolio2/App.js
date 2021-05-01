import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Pushups from './components/Pushups';
import Squats from './components/Squats';
import Pullups from './components/Pullups';
import Situps from './components/Situps';
import Planks from './components/Planks';
import 'react-native-screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Pushups" component={Pushups} />
        <Stack.Screen name="Squats" component={Squats}/>
        <Stack.Screen name="Situps" component={Situps}/>
        <Stack.Screen name="Planks" component={Planks}/>
        <Stack.Screen name="Pullups" component={Pullups}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;