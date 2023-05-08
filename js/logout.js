import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
getAuth,
signOut 
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyBKb8TIcIJsLzW3F6EFnrn14eXZQxmVYg0",
authDomain: "boot-e873b.firebaseapp.com",
projectId: "boot-e873b",
storageBucket: "boot-e873b.appspot.com",
messagingSenderId: "79211905093",
appId: "1:79211905093:web:a18c28948f3fbb5997a32c",
measurementId: "G-0TKDGHC82J"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
        
const signOutButton = document.getElementById("logout-link");

// Sign-Out
const signOutNow = () => {
signOut(auth).then(() => {
// Sign-out successful.
window.location = "./index.html";
}).catch((error) => {
// An error happened.
});
}
signOutButton.addEventListener('click', signOutNow);