// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/store'
// import 'firebase/storage'
import {initializeApp} from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAe_ETQd9RjDeYxXIuXjHH5RdNpSf0cIYo",
  authDomain: "vuecrud2.firebaseapp.com",
  projectId: "vuecrud2",
  storageBucket: "vuecrud2.appspot.com",
  messagingSenderId: "649983500300",
  appId: "1:649983500300:web:4c5b75495824189fd18e29"
};
var app=firebase.initializeApp(firebaseConfig)
export const db=app.database();
export const nameRef=db.ref('student');