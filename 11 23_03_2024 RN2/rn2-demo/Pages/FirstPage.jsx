import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FirstPage(props) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 2, borderColor: 'grey', padding: 10, margin: 10, borderRadius: 10 }}>
        <Text>Ruppin's app!</Text>
        <Button title="Add" onPress={() => setCount((prevCnt) => prevCnt + 1)} />
        <Text>count={count}</Text>
      </View>

      <TouchableOpacity onPress={() => {
        props.navigation.navigate('SecondPage', { user: 'Lucy' + new Date().getSeconds() });
      }}><Text style={{ backgroundColor: 'lightblue', padding: 5, margin: 5 }} >Goto Second Page!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        props.navigation.navigate('MaterialTabbedPageNavigator');
      }}><Text style={{ backgroundColor: '#aa3322', padding: 5, margin: 5 }} >Goto Material Page!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        props.navigation.navigate('LocationPage');
      }}><Text style={{ backgroundColor: '#aacc22', padding: 5, margin: 5 }} >Goto Location Page!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        props.navigation.navigate('CameraPage');
      }}><Text style={{ backgroundColor: '#00cc00', padding: 5, margin: 5 }} >Goto Camera Page!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        props.navigation.navigate('AsyncStoragePage');
      }}><Text style={{ backgroundColor: '#eecc00', padding: 5, margin: 5 }} >Goto Async Page!</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
