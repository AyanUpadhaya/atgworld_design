import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    // Dummy authentication logic
    if (email && password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const signup = (email, password, confirmPassword) => {
    // Dummy signup logic
    if (email && password && password === confirmPassword) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider