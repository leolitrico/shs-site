import firebase from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-3YMFH_VZ-zvvBP_z1ZoDJDBNAvFSVgE",
  authDomain: "web-ltm.firebaseapp.com",
  projectId: "web-ltm",
  storageBucket: "web-ltm.appspot.com",
  messagingSenderId: "1053935569646",
  appId: "1:1053935569646:web:c9d0a46c6f79f69c1741ff"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()