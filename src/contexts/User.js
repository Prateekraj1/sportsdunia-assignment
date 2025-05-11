"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState(null);
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInformation(user);
        setIsLoggedInUser(true);
      } else {
        setUserInformation(null);
        setIsLoggedInUser(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ userInformation, setUserInformation, isLoggedInUser, setIsLoggedInUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside a UserProvider");
  }
  return context;
};
