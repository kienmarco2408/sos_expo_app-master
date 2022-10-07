import Header from 'components/Header';
import { Box, ScrollView } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import TheoryCard from './components/TheoryCard';
import { topic } from 'utils/mockup_data';
import { useNavigation } from '@react-navigation/core';
import { RootStackProps } from 'navigation/RootStack';

const TheoryScreen = () => {
  const navigation = useNavigation<RootStackProps['navigation']>();

  const handleTheoryScreen = (theoryId: number) => {
    navigation.navigate('TheoryDetailScreen', { id: theoryId });
  };
  return (
    <Box>
      <ImageBackground
        source={require('assets/images/bg.png')}
        style={styles.bgStyle}
      />
      <Header title="Lý thuyết" />
      <ScrollView style={styles.cardContainer}>
        {topic.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleTheoryScreen(item.id)}
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

export default TheoryScreen;

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
