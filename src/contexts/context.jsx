import { onAuthStateChanged } from "firebase/auth";
import { useContext, useState, createContext, useEffect } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setAuthCheck(true);
      setCurrentUser(user);
      unSubscribe();
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoading,
        setIsLoading,
        authCheck,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);

export default AuthProvider;
