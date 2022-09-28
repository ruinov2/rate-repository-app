import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import StyledText from './StyledText.jsx';
import RepositoryStats from './RepositoryStats.jsx';
import theme from '../theme.js';

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    <StyledText fontSize='subheading' fontWeight='bold'>
      FullName: {props.fullName}
    </StyledText>
    <StyledText>{props.description}</StyledText>
    <StyledText style={styles.language}>{props.language}</StyledText>
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    // overflow: 'hidden',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
