import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDIbpTl6ukEnSuQgOpQ6zbOHo4tbqnnv_s",
  authDomain: "video-project-68c39.firebaseapp.com",
  projectId: "video-project-68c39",
  storageBucket: "video-project-68c39.appspot.com",
  messagingSenderId: "986949311943",
  appId: "1:986949311943:web:0d1ab99a761a03b06f0de2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export default app;