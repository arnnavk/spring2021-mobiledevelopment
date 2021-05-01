import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

function Pushups(props) {
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    
      return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Sets: {sets} Reps: {reps}</Text>
              <Button title="Add Sets"
              onPress={() => setSets(sets + 1)}/>
              <Button title="Add Reps"
              onPress={() => setReps(reps + 1)}/>
              <Button title="Reset Sets" 
              onPress={() => setSets(0)}/>
              <Button title="Reset Reps" 
              onPress={() => setReps(0)}/>
              <Button
              title="Next"
              onPress={() => props.navigation.navigate('Squats')}
              />
          </View>
      );
  }

export default Pushups;