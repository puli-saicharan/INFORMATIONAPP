import React, { createContext, useEffect, useState } from 'react';

export const UserListContext = createContext();

export const UserListProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('https://random-data-api.com/api/users/random_user?size=80');
    const data = await response.json();
    setUsers(data);
  };

  const goToPreviousUser = () => {
    if (currentUserIndex > 0) {
      setCurrentUserIndex(currentUserIndex - 1);
    }
  };

  const goToNextUser = () => {
    if (currentUserIndex < users.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
    }
  };

  return (
    <UserListContext.Provider value={{ users, currentUserIndex, goToPreviousUser, goToNextUser }}>
      {children}
    </UserListContext.Provider>
  );
};
