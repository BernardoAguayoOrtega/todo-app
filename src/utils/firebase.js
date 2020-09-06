//import everything as firebase
import * as firebase from 'firebase/app';
//import firestore
import 'firebase/firestore';

// Initialize Firebase
firebase.initializeApp({
	apiKey: "AIzaSyDsh4J0yDUF2KkPPArGjRhTkOK_3BCt3OY",
	authDomain: "todo-app-ccfa8.firebaseapp.com",
	databaseURL: "https://todo-app-ccfa8.firebaseio.com",
	projectId: "todo-app-ccfa8",
	storageBucket: "todo-app-ccfa8.appspot.com",
	messagingSenderId: "49304441043",
	appId: "1:49304441043:web:5c8b5509195e5f31d4c426"
});

export const getTime = firebase.firestore.FieldValue.serverTimestamp;

export const db = firebase.firestore();
