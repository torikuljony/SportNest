"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "@/firebase/firebase.config";

export const AuthContext =
  createContext();

export default function AuthProvider({
  children,
}) {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

          setLoading(false);
        }
      );

    return () => unsubscribe();

  }, []);

  // logout
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    logOut,
  };

  return (
    <AuthContext.Provider
      value={authInfo}
    >
      {children}
    </AuthContext.Provider>
  );
}