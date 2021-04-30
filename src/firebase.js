import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
  
    //Firebase credentials

});

var db = firebaseApp.firestore();

export { db };