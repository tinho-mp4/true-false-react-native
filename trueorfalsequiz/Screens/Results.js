import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';


export default function ResultsScreen({ route, navigation }) {
  const [loaded] = useFonts({
    Arial: require('../assets/fonts/arial.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
    <Text style={styles.h1}>Results</Text>
    <Text style={styles.scoreText}>You Scored {route.params.finalScore}/10</Text>
    <Button onPress={() => navigation.navigate('Home')} title="Try Again?" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DCEDFF',
    padding: 25,
    paddingBottom: 50,
  },
  h1: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    margin: 3,
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 24,
    paddingBottom: 8,
    paddingTop: 20,
  },
});