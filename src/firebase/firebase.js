import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyAvODe2gVFxIaia5TqS0H8Iu1rWz5kucCU',
  authDomain: 'expensify-41dc6.firebaseapp.com',
  databaseURL:
    'https://expensify-41dc6-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'expensify-41dc6',
  storageBucket: 'expensify-41dc6.appspot.com',
  messagingSenderId: '359937123849',
  appId: '1:359937123849:web:c858b53403c5b34da4bad8'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
