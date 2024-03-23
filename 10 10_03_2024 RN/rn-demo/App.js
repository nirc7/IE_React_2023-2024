import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const btnAdd=()=>{
    
    console.log(2);
    let num=7;
    num++;
    console.log(num);

  }

  return (
    <View style={styles.container}>
      <Text style={{color:'red', fontSize:20}}>Avi's app!</Text>
      <Button title='add' onPress={()=> console.log(1)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7700bb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
