import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export default function SecondPage(props) {

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('focus');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('unfocus');
      };
    }, [])
  );

  return (
    <View>
      <Text>This is the second page!</Text>
      <Text>{props.route.params != undefined ?
        props.route.params.user : '...'}</Text>
    </View>
  )
}