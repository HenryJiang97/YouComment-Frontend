import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBolx_yj--B8k_kHJu9vbfsP1NYSZt6Cqk",
    authDomain: "youcomment-20456.firebaseapp.com",
    projectId: "youcomment-20456",
    storageBucket: "youcomment-20456.appspot.com",
    messagingSenderId: "420075115488",
    appId: "1:420075115488:web:a1d1628169338a65291185",
    measurementId: "G-7143M9XTV5"
};

app.initializeApp(config);
let auth = app.auth();
 
// Firebase Auth APIs

// Create user with email and password
let createUserWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
        let info = `UID: ${user.user.uid}\nEmail: ${user.user.email}`;
        alert(`Signed up\nUser Info:\n${info}`);
    })
    .catch((error) => {
        console.log("Error signing up", error.code, error.message);
    });
}

// Sign in with email and password
let signInWithEmailAndPassword = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
        let info = `UID: ${user.user.uid}\nEmail: ${user.user.email}`
        alert(`Signed in\nUser Info:\n${info}`);
    })
    .catch((error) => {
        console.log("Error signing in", error.code, error.message);
    });
}

// Sign out
let signOut = () => {
    auth.signOut().then(function() {
        alert("Signed out");
    }).catch(function(error) {
        console.log("Error signing out", error.code, error.message);
    });
}

// Password reset
let resetPassword = (newPassword) => {
    this.auth.resetPassword(newPassword);
}

export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    resetPassword
}