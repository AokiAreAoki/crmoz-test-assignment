/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import useIsDarkMode from './hooks/useIsDarkMode';
import AppRouter from './routes';
import {NativeRouter} from 'react-router-native';

function App(): React.JSX.Element {
  const darkMode = useIsDarkMode();
  const backgroundColor = darkMode ? Colors.darker : Colors.lighter;

  return (
    <SafeAreaView style={[styles.safeAreaView, {backgroundColor}]}>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />

      <View style={styles.root}>
        <NativeRouter>
          <AppRouter />
        </NativeRouter>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  root: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    rowGap: 10,
  },
});

export default App;
