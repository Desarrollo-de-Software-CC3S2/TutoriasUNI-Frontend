import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
//import roles from "../helpers/roles";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [course, setCourse] = useState(null);
  const login = (userCredentials, fromLocation) => {
    setUser(userCredentials);
    if (fromLocation) {
      history.push(fromLocation);
    }
  };
  const logout = () => setUser(null);
  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;
  const contextValue = {
    user,
    setUser,
    course,
    setCourse,
    isLogged,
    hasRole,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
