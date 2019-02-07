import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNNv34GutzEdIWUQX98Rmp5md7vW937OU",
  authDomain: "catch-of-the-day-lucas-petti.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-lucas-petti.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
