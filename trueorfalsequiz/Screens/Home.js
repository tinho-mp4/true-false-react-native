import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
  <ImageBackground style={styles.img}                                               source={require('../assets/images/images1.png')}                                 resizeMode= 'cover' >

      <Text style={styles.h1}>True or False</Text>
      <Button onPress={() => navigation.navigate('Quiz')} title="Start Quiz" />
  </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DCEDFF',
    padding: 8,
  },
  h1: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    margin: 8,
  },
  img: {
     width: '100%',
      flex: 1,
    justifyContent: 'center',
  }
});
