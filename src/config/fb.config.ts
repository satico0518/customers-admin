import firebase from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyAoa0X3W1F1x_qhq0h0go709Blvve3WewI",
  authDomain: "customers-7debf.firebaseapp.com",
  databaseURL: "https://customers-7debf.firebaseio.com",
  projectId: "customers-7debf",
  storageBucket: "customers-7debf.appspot.com",
  messagingSenderId: "471936252808",
  appId: "1:471936252808:web:e52e7717d53f8d0759d83d",
  measurementId: "G-B7RL5XT551",
};
firebase.initializeApp(firebaseConfig);
export default firebase;

