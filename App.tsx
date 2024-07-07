import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { fetchPosts, fetchPostDetails, heavyComputation } from './src/api';
import PostItem from './src/PostItem';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      Alert.alert("FETCHING DATA");
      const data = await fetchPosts();
      setPosts(data);
      Alert.alert("FETCHING DATA COMPLETE");
    };
    fetchData();
  }, []);

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);

  const renderItem = ({ item }) => {
    const computedDetails = useMemo(() => heavyComputation(item), [item]);
    return <PostItem item={item} computedDetails={computedDetails} />;
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="-" onPress={decrementCounter} />
        <Text>{counter}</Text>
        <Button title="+" onPress={incrementCounter} />
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default App;
