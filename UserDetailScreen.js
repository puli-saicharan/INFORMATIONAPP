import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { UserListContext } from './UserListContext';

const UserDetailScreen = ({ navigation }) => {
  const { users, currentUserIndex, goToPreviousUser, goToNextUser } = useContext(UserListContext);
  const user = users[currentUserIndex];

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.text}>ID: {user.id}</Text>
      <Text style={styles.text}>UID: {user.uid}</Text>
      <Text style={styles.text}>Password: {user.password}</Text>
      <Text style={styles.text}>First Name: {user.first_name}</Text>
      <Text style={styles.text}>Last Name: {user.last_name}</Text>
      <Text style={styles.text}>Username: {user.username}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={goToPreviousUser} disabled={currentUserIndex === 0} />
        <Button title="Next" onPress={goToNextUser} disabled={currentUserIndex === users.length - 1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

export default UserDetailScreen;
