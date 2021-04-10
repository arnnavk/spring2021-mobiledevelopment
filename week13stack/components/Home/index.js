import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

function Home(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Sunny Day"
          onPress={() => props.navigation.navigate('Sunny Day')}
        />
        <Button
          title="Rainy Day"
          onPress={() => props.navigation.navigate('Rainy Day')}
        />
      </View>
    );
  }

  export default Home;