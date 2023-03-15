
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCWCbha2oZkaJ6_tnXeYYfRz8KH71wVCtw",
    authDomain: "rickmorty-cb242.firebaseapp.com",
    projectId: "rickmorty-cb242",
    storageBucket: "rickmorty-cb242.appspot.com",
    messagingSenderId: "730804982970",
    appId: "1:730804982970:web:59507cdcf80dd1e107de83",
    measurementId: "G-506LKY7DCK"
  };

 export const app= initializeApp(firebaseConfig);

 export const auth = getAuth(app)
