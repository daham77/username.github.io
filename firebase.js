import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

var firebaseApp = firebase.initializeApp({
    
  apiKey: "AIzaSyDuslS07CWf8r5CNvj_UtFNXwpSao_agPU",
  authDomain: "userdetails-183a2.firebaseapp.com",
  projectId: "userdetails-183a2",
  storageBucket: "userdetails-183a2.appspot.com",
  messagingSenderId: "916486403864",
  appId: "1:916486403864:web:d9559300fd8d8ce80f506d",
  measurementId: "G-PWLRPZX453"

  });

  var db = firebaseApp.firestore();

  export {db};