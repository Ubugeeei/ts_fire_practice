import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
if (!firebase.apps.length) {
  firebase.initializeApp({});
  firebase.auth().useDeviceLanguage();
}
export default firebase;
