import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {
  //Binding the function with class
    const [food, setFood] = useState();

    const [things, setThings] = useState();

    const [people, setPeople] = useState();

    const [votes, setVotes] = useState();

    function increaseFoodVote(value){
      setFood('Pizza');
      setVotes('Pizza');
    }

    function increaseThingsVote(value){
      setThings('PS5');
      setVotes('PS5');
    }

    function increasePeopleVote(value){
      setPeople('Chris Evans');
      setVotes('Chris Evans');
    }
    
    return (
        <View style={styles.container}>
        { votes === 'Pizza' ? (
          <View style={styles.container}>
            <Text>You voted for {food}!</Text>
          </View>
        ) : (
          votes === 'PS5' ? (
            <View style={styles.container}>
            <Text>You voted for {things}!</Text>
          </View>
          ) : (
            votes === 'Chris Evans' ? (
            <View style={styles.container}>
            <Text>You voted for {people}!</Text>
          </View>
            ) : (
            <View>
            <Text style={styles.headerText}>Vote for your favorite!</Text>
            <Card>
              <Button title="Pizza" onPress={(value) => (increaseFoodVote('Pizza'))}/>
            </Card>
            <Card.Divider/>
            <Card>
              <Button title="PS5" onPress={(value) => (increaseThingsVote('PS5'))}/>
            </Card>
            <Card.Divider/>
            <Card>
              <Button title="Chris Evans" onPress={(value) => (increasePeopleVote('Chris Evans'))}/>
            </Card>
            </View>
        )))
        }
         </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }})



