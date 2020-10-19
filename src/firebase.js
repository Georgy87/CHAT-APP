import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDlJLFV-13b6-3otNFHOMVkLfQmoj17hBE",
    authDomain: "whatsapp-8f551.firebaseapp.com",
    databaseURL: "https://whatsapp-8f551.firebaseio.com",
    projectId: "whatsapp-8f551",
    storageBucket: "whatsapp-8f551.appspot.com",
    messagingSenderId: "420731314783",
    appId: "1:420731314783:web:0bf21f0123a4a9810bb1ea",
    measurementId: "G-DGZ90ML82D"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { auth, provider };
export default db;
