"use client";

import app from "@/firebase/firebase.config";

import {
  createContext,
} from "react";

import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

export default function AuthProvider({ children }) {

  const googleProvider = new GoogleAuthProvider();

  // register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // login
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(
      auth,
      googleProvider
    );
  };

  const authInfo = {
    createUser,
    signInUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}