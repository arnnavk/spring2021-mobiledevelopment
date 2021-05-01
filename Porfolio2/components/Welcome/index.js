import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

function Welcome(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to the Exercise Tracker App</Text>
        <Button
          title="Start"
          onPress={() => props.navigation.navigate('Pushups')}
        />
      </View>
    );
  }

  export default Welcome;