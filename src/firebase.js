import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const app = initializeApp({
//   apiKey: "AIzaSyDnJiEBiTbMvZ2f0xQrTuZZGiywIIqFACs",
//   authDomain: "ranju-chat-app.firebaseapp.com",
//   projectId: "ranju-chat-app",
//   storageBucket: "ranju-chat-app.appspot.com",
//   messagingSenderId: "261184571447",
//   appId: "1:261184571447:web:7a83a1eee307e970fad7b2"
// });
const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
});

export const auth = getAuth(app);
export default app;