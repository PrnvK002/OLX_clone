import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase' // for data storage
import 'firebase/storage' // for meadia storage


const firebaseConfig = {
    apiKey: "AIzaSyD1QU2GOko87CkrqdzP64gzJzf1Hxf5_Ks",
    authDomain: "olx-clone-9d119.firebaseapp.com",
    projectId: "olx-clone-9d119",
    storageBucket: "olx-clone-9d119.appspot.com",
    messagingSenderId: "335228017814",
    appId: "1:335228017814:web:a56ecce692927777a8b6b7",
    measurementId: "G-5BQ6NVL86V"
  };

  export default firebase.initializeApp(firebaseConfig);