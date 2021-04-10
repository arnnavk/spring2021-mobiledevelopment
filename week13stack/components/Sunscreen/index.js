import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

function SunScreen(props) {
    const [days, setDays] = useState(0);
    
      return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Sunny Days: {days}</Text>
              <Button title="Add Sunny Day"
              onPress={() => setDays(days + 1)}/>
              <Button title="Reset Counter" 
              onPress={() => setDays(0)}/>
              <Button
              title="Back to Home"
              onPress={() => props.navigation.navigate('Home')}
              />
          </View>
      );
  }

export default SunScreen;