// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
//import firebase from "firebase/app"; // new way
import * as firebase from 'firebase/app';// made with firebase 7.16.1
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD3fy5_ZRfmL9hQburW6opDmknj79wXJ6w",
	authDomain: "firegram-9a79b.firebaseapp.com",
	projectId: "firegram-9a79b",
	storageBucket: "firegram-9a79b.appspot.com",
	messagingSenderId: "440529073576",
	appId: "1:440529073576:web:76b5d3d29070208e25999d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
