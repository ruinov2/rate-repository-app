import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyledText from './StyledText.jsx';
import RepositoryStats from './RepositoryStats.jsx';

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText fontSize='subheading' fontWeight='bold'>
      FullName: {props.fullName}
    </StyledText>
    <StyledText>Description: {props.description}</StyledText>
    <StyledText>Language: {props.language}</StyledText>
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
