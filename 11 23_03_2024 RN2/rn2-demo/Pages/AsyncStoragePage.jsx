import { View, Text, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStoragePage() {

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }

  return (
    <View>
      <Text>AsyncStoragePage</Text>
      <Button title="save to async storage" onPress={() => storeData({ id: 7, name: 'avi' })} />
      <Button title="get from async storage" onPress={async() => {
        let obj = await getData();
        console.log(obj.id);
      }} />
    </View>
  )
}