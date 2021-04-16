import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";


export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}

export const googleSingIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const singnedInUser = result.user;
            setUserToken();
            return (singnedInUser)

        }).catch((error) => {
            const errorMessage = error.message;
            return (errorMessage)
        });
}

export const facebookSingIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const singnedInUser = result.user;
            setUserToken();
            return (singnedInUser)

        }).catch((error) => {
            const errorMessage = error.message;
            return (errorMessage)
        });
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const user = res.user;
            setUserToken();
            updateUserName(name)
            return user;
        })
        .catch((error) => {
            const errorMessage = error.message;
            return (errorMessage);
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const user = res.user;
            setUserToken();
            return user
        })
        .catch((error) => {
            const errorMessage = error.message;
            return (errorMessage)
        });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(result => {
            const singnedOutUser = {}
            return singnedOutUser;
        }).catch((error) => {
            const errorMessage = error.message;
            return (errorMessage)
        });
}

const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        sessionStorage.setItem('token', idToken)
    }).catch(function (error) {
        console.log(error)
    });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    })
}