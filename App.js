import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './src/routes/index.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent backgroundColor="#820606"/>
      <Stack/>
    </NavigationContainer>
  );
}