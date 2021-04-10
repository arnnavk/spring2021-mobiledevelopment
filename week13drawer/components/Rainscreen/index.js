import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class RainScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          days: 0
      };
  }

render() {

  return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Rainy Days: {this.state.days}</Text>
          <Button title="Rainy Day"
          onPress={() => this.setState({days: this.state.days + 1})}/>
          <Button title="Reset Counter" onPress={() => this.setState({days: 0})}/>
          <Button
      title="Back to Home"
      onPress={() => this.props.navigation.navigate('Home')}
    />
      </View>
  );
}
}

export default RainScreen;