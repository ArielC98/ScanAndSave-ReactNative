// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { ScanScreen } from '../screens/ScanScreen';
import { PreviewScreen } from '../screens/PreviewScreen';
import { SaveScreen } from '../screens/SaveScreen';
import { DocumentScreen } from '../screens/DocumentScreen';

export type RootStackParamList = {
  Home: undefined;
  Scan: undefined;
  Preview: { imageUri: string }; // later used when sending photo
  Save: { imageUri: string };
  Documents: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scan">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
        <Stack.Screen name="Save" component={SaveScreen} />
        <Stack.Screen name="Documents" component={DocumentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
