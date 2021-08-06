import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLOgout: () => {},
});

export default AuthContext;
