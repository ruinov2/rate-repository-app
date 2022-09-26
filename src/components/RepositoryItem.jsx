import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = (props) => (
  <View key={props.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
    <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{props.id}</Text>
  </View>
);

export default RepositoryItem;
