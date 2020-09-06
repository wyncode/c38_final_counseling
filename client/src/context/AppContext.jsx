import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem('user') || null // TODO fix this if there's time.
  );
  const [loading, setLoading] = useState(false);
  const [journalList, setJournalList] = useState(null);
  const user = sessionStorage.getItem('user');

  useEffect(() => {
    // incase user refreshes and context is cleared.
    if (user && !currentUser) {
      // TODO current user is null
      fetch('/api/users/current', {
        method: 'get',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `jwt ${currentUser?.tokens[0]?.token}` // TODO this is a hack, shouldn't be necessary
        }
      })
        .then((res) => res.json())
        .then((res) => {
          setCurrentUser(res.data);
          console.log('auth', currentUser);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{ currentUser, setCurrentUser, loading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
