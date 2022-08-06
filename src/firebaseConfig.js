import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: '',
//   authDomain: '',
//   projectId: '',
//   storageBucket: '',
//   messagingSenderId: '',
//   appId: '',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBXcLfR0FXmPhHHXu1iRdiRteJl1EJBKKo',
  authDomain: 'test-d8eca.firebaseapp.com',
  databaseURL: 'https://test-d8eca-default-rtdb.firebaseio.com',
  projectId: 'test-d8eca',
  storageBucket: 'test-d8eca.appspot.com',
  messagingSenderId: '973948352506',
  appId: '1:973948352506:web:db70d2d883546070141643',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
