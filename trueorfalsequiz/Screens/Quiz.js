import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Questions from '../data/Questions.js'
const questions = Questions;

let score = 0;

export default function QuizScreen({ navigation }) {
  const [ currentQuestion, setCurrentQuestion ] = useState(0);

  const answerQuestion = (answer) => {
    if(answer == questions[currentQuestion].answer) {
      score++;
    }
    console.log("score: " + score);
    nextQuestion();
  }

  const nextQuestion = () => {
    if(currentQuestion < questions.length-1){
      setCurrentQuestion(currentQuestion+1);
    } else {
      navigation.navigate("Results", { finalScore: score });
      score = 0;
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Question {currentQuestion + 1}/10</Text>
      </View>
      {/* Question */}
      { questions[currentQuestion].image?
      <ImageBackground
      style={styles.questionBox}
      source={questions[currentQuestion].image}
      >
    <Text style={styles.quizText}>{questions[currentQuestion].question} </Text>
    </ImageBackground>
    :
      <View style={styles.questionBox}>
        <Text style={styles.quizText}>{questions[currentQuestion].question}
        </Text>
      </View>
      }
      {/* Button*/}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => answerQuestion(true) }>
          <Text style={styles.buttonText}>True</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => answerQuestion(false) }>
          <Text style={styles.buttonText}>False</Text>
        </TouchableOpacity>
      </View>
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
  header: {
    color: '#181619',
    borderBottomWidth: 1,
    textAlign: 'center',
    padding: 8,
    textTransform: 'uppercase',
    margin: 8,
  },

  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },

  questionBox: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    overflow: 'hidden',

    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },

  quizText: {
    color: '#181619',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 8,
    width: '100%',
    fontFamily: 'Arial',
    fontSize: 20,
  },

  buttonRow: {
    color: '#181619',
    flexDirection: 'row',
    padding: 8,
    fontFamily: 'Arial',
  },
  quizButton: {
    flex: 1,
    textAlign: 'center',
    margin: 6,
    padding: 12,
    backgroundColor: '#4D6160',
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
