import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0AhHyeT5Ow769uO70rtu2QsfZsIi5DFc",
  authDomain: "react-netflix-clone-83afb.firebaseapp.com",
  projectId: "react-netflix-clone-83afb",
  storageBucket: "react-netflix-clone-83afb.appspot.com",
  messagingSenderId: "746591838102",
  appId: "1:746591838102:web:3646f30eba3d5c961d47b7"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);