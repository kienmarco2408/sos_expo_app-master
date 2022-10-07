import { useNavigation } from '@react-navigation/core';
import Header from 'components/Header';
import { Box, ScrollView } from 'native-base';
import { RootStackProps } from 'navigation/RootStack';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import TheoryCard from 'screens/theory/components/TheoryCard';
import { topic } from 'utils/mockup_data';

const QuestionScreen = () => {
  const navigation = useNavigation<RootStackProps['navigation']>();

  const handleQuizScreen = (quesId: number) => {
    navigation.navigate('QuizScreen', { id: quesId });
  };
  return (
    <Box>
      <ImageBackground
        source={require('assets/images/bg.png')}
        style={styles.bgStyle}
      />
      <Header title="Câu hỏi" />
      <ScrollView style={styles.cardContainer}>
        {topic.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleQuizScreen(item.id)}
          >
            <Box mb="4">
              <TheoryCard index={item.id} title={item.title} />
            </Box>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Box>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  bgStyle: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 80,
    paddingHorizontal: '10%',
  },
});
