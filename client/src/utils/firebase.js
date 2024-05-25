import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-557d7.firebaseapp.com",
  projectId: "taskmanager-557d7",
  storageBucket: "taskmanager-557d7.appspot.com",
  messagingSenderId: "824261215224",
  appId: "1:824261215224:web:ba24631a12b4bf9d5e8c0d",
};

export const app = initializeApp(firebaseConfig);
