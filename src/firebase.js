// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7LcknRI-SIM_qvqhxs6Y3Y2JdOToyaA4",
  authDomain: "whats-app-clone-599b6.firebaseapp.com",
  databaseURL: "https://whats-app-clone-599b6.firebaseio.com",
  projectId: "whats-app-clone-599b6",
  storageBucket: "whats-app-clone-599b6.appspot.com",
  messagingSenderId: "919997234439",
  appId: "1:919997234439:web:fa32bf2b05c45bb963d9a2",
  measurementId: "G-HEXR8HTPQN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider }; 
export default db;
