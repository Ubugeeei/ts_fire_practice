import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "ここの値は人それぞれ違います",
    authDomain: "ここの値は人それぞれ違います",
    databaseURL: "ここの値は人それぞれ違います",
    projectId: "ここの値は人それぞれ違います",
    storageBucket: "ここの値は人それぞれ違います",
    messagingSenderId: "ここの値は人それぞれ違います",
    appId: "ここの値は人それぞれ違います",
    measurementId: "ここの値は人それぞれ違います"
  });
  firebase.auth().useDeviceLanguage();
}
export default firebase;
