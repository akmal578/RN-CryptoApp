import React from 'react';
import { CryptoDetail, Transaction } from './screens';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
//Status bar: 'default', 'dark-content', 'light-content'

import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      /> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Tabs} />

        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
          options={{
            // ...TransitionPresets.SlideFromRightIOS, // work same as below
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{
            // ...TransitionPresets.SlideFromRightIOS, // work same as below
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
