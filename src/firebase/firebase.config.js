import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWDQyU7uQzzSUIUeBZBcf8rfpAhhZfk28",
  authDomain: "sportnest-ac4ce.firebaseapp.com",
  projectId: "sportnest-ac4ce",
  storageBucket: "sportnest-ac4ce.firebasestorage.app",
  messagingSenderId: "624249025492",
  appId: "1:624249025492:web:b23ca02f1a0d8341741c41",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider =
  new GoogleAuthProvider();

export default app;