// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexPage from './src/components/DeepLinks/IndexPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexPage">
        <Stack.Screen name="IndexPage" component={IndexPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


