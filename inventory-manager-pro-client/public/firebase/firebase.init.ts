import { initializeApp, FirebaseApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = (): FirebaseApp => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export default initializeAuthentication;
