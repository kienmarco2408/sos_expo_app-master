import Header from 'components/Header';
import { Box, FlatList } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import TheoryItemDetail from './component/TheoryItemDetail';
import { detail_topic, IDetail } from 'utils/mockup_data';
import { useRoute } from '@react-navigation/native';

const TheoryDetailScreen = (props: any) => {
  const {} = props;
  const route = useRoute();
  const param: any = route.params;
  const [data, setData] = useState<IDetail[]>([] as IDetail[]);

  useEffect(() => {
    if (param.id) {
      setData(detail_topic[param.id]);
    }
  }, []);

  if (data.length === 0) {
    return <Box />;
  }
  return (
    <Box width="100%">
      <FlatList
        data={data}
        renderItem={({ item }) => <TheoryItemDetail item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').width}
        horizontal={true}
      />
    </Box>
  );
};

export default TheoryDetailScreen;

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
