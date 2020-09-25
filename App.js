/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

const App: () => React$Node = ({ componentId }) => {
  const onPress = () => {
    Navigation.push(componentId, {
      component: {
        name: 'com.myApp.WelcomeScreen',
      }
    });
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView >
          <Button onPress={onPress} title="Press" />
          <Text>Press the above button to push a screen, then press back to release it, and note that it flashes to white.</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default App;
