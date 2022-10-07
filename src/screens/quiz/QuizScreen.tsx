import { useNavigation, useRoute } from '@react-navigation/native';
import Header from 'components/Header';
import { Box, Radio, ScrollView, Text, Button } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { ques_topic, IQuiz } from 'utils/mockup_data';
import color from 'utils/color';
import { RootStackProps } from 'navigation/RootStack';

const QuizScreen = () => {
  const route = useRoute();
  const { params }: any = route;
  const navigation = useNavigation<RootStackProps['navigation']>();
  const [quiz, setQuiz] = useState<IQuiz[]>([] as IQuiz[]);
  const [value, setValue] = useState<any>({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    '10': '',
  });

  const submitQuiz = () => {
    navigation.navigate('ResultScreen', { id: params.id, resultObj: value });
  };

  useEffect(() => {
    if (params.id) {
      setQuiz(ques_topic[params.id]);
    }
  }, []);

  if (quiz.length === 0) {
    return <Box />;
  }

  return (
    <Box>
      <ImageBackground
        source={require('assets/images/bg.png')}
        style={styles.bgStyle}
      />
      <Header title="Trả lời câu hỏi" />
      <ScrollView style={styles.quizContainer}>
        {quiz.map((item) => (
          <Box style={styles.boxQuiz} key={item.id}>
            <Text fontSize={20} bold>
              Câu {item.id}:<Text fontSize={18}>{item.question}</Text>
            </Text>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={value[item.id]}
              onChange={(nextValue) => {
                setValue({ ...value, [item.id]: nextValue });
              }}
            >
              <Radio value="1" my={1} size="lg">
                <Text m="3" fontSize={17}>
                  {item.answer[0]}
                </Text>
              </Radio>
              <Radio value="2" my={1} size="lg">
                <Text m="3" fontSize={17}>
                  {item.answer[1]}
                </Text>
              </Radio>
            </Radio.Group>
          </Box>
        ))}
        <TouchableOpacity onPress={submitQuiz}>
          <Box style={styles.btnStyle}>
            <Text style={styles.textStyle}>Nộp bài</Text>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    </Box>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  bgStyle: {
    width: '100%',
    height: '100%',
  },
  quizContainer: {
    paddingHorizontal: '5%',
    position: 'absolute',
    top: '10%',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
  boxQuiz: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 20,
  },
  btnStyle: {
    backgroundColor: color.yellow,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Chewy-Regular',
  },
});
