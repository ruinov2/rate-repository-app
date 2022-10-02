import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText.jsx';
import Constants from 'expo-constants';
import theme from '../theme.js';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    panddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
    margin: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText fontweight='bold' style={styles.text}>
        Repositories
      </StyledText>
    </View>
  );
};

export default AppBar;
