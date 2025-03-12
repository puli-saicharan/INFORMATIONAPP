import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { UserListProvider } from './UserListContext';

const App = () => {
  return (
    <UserListProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </UserListProvider>
  );
};

export default App;
