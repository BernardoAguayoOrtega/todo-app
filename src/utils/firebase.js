//import everything as firebase
import * as firebase from 'firebase/app';
//import firestore
import 'firebase/firestore';

// Initialize Firebase
firebase.initializeApp({
	apiKey: 'AIzaSyAQbz2Kmrstvd2XMxGLaL6FUd3NuNGlcCs',
	authDomain: 'test-3bd1f.firebaseapp.com',
	databaseURL: 'https://test-3bd1f.firebaseio.com',
	projectId: 'test-3bd1f',
	storageBucket: 'test-3bd1f.appspot.com',
	messagingSenderId: '523142341168',
	appId: '1:523142341168:web:fe6ee0e2ae7b827073c3f5',
});

export const getTime = firebase.firestore.FieldValue.serverTimestamp;

export const db = firebase.firestore();
