import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: <YOURAPIKEY>,
//   authDomain: <YOURAUTHDOAMIN>,
//   projectId: <YOURPROJECTID>,
//   storageBucket: <YOURSTORAGEBUCKET>,
//   messagingSenderId: <YOURMESSAGINGSENDERID>,
//   appId: <YOURAPPID>,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCLsSvwjjLrM6vdbDlQsy8cV8uo6GRhUq4",
  authDomain: "firstauth-73e1b.firebaseapp.com",
  projectId: "firstauth-73e1b",
  storageBucket: "firstauth-73e1b.appspot.com",
  messagingSenderId: "1074352798198",
  appId: "1:1074352798198:web:3a84bc9d61775d489c6fd7",
  measurementId: "G-QQ67M57K3R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
