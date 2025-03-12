import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetailScreen from './UserDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User Details" component={UserDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
