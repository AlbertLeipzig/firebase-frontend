import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { config } from './firebaseConfig.js';
import { getAnalytics } from 'firebase/analytics';

function initFirebase() {
  const firebaseApp = initializeApp(config.firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  return { firebaseApp, analytics, db, auth };
}

function connectToEmulators = () =>{
    if (config.isEmulator) {
        firebaseApp.firestore().useEmulator('localhost', 8080);
        firebaseApp.auth().useEmulator('http://localhost:9099');
    }
}