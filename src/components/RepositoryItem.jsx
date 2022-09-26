import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyledText from './StyledText.jsx';

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText fontSize='subheading' fontWeight='bold'>
      FullName: {props.fullName}
    </StyledText>
    <StyledText>Description: {props.description}</StyledText>
    <StyledText>Language: {props.language}</StyledText>
    <StyledText>Forks: {props.forksCount}</StyledText>
    <StyledText>Stars: {props.stargazersCount}</StyledText>
    <StyledText>Review: {props.reviewCount}</StyledText>
    <StyledText>Rating: {props.ratingAverage}</StyledText>
    <StyledText>Url: {props.ownerAvatarUrl}</StyledText>
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
