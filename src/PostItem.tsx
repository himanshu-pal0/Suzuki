import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { fetchPostDetails } from './api';

const PostItem = ({ item, computedDetails }) => {
  const fetchDetails = useCallback(async () => {
    const details = await fetchPostDetails(item.id);
    console.log(details);
  }, [item.id]);

  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{computedDetails}</Text>
      <Button title="View Details" onPress={fetchDetails} />
    </View>
  );
};

export default PostItem;
