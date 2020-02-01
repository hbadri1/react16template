import React from 'react'
import firebase from 'firebase'
import useAuth from '../hooks/useAuth'

// Those data are from a project created with my personal email hissou86@gmail.com
firebase.initializeApp({
    apiKey: "AIzaSyAZKLhuNpqezJE4kDOxx84BlwIF3bWVd44",
    authDomain: "myreactemplate.firebaseapp.com",
    databaseURL: "https://myreactemplate.firebaseio.com",
    projectId: "myreactemplate",
    storageBucket: "myreactemplate.appspot.com",
    messagingSenderId: "346076508314",
    appId: "1:346076508314:web:6e97d24be7fbb3cfa7af23",
    measurementId: "G-S5YVPYCYEK"
});

interface IContextProps {
    user: any,
    signIn : (email: string , password: string) => void,
    signOut: () => void,
    signUp: (email: string, password: string) => void,
    sendPasswordResetEmail : (email: string) => void,
    confirmPasswordReset: (code: string, password: string) => void
}

const AuthContext = React.createContext({} as IContextProps)
export default AuthContext

export const AuthProvider = (props: any) => {

    const {
        user,
        signIn,
        signOut,
        signUp,
        sendPasswordResetEmail,
        confirmPasswordReset
    } = useAuth({} as IContextProps)

    return (
    <AuthContext.Provider value ={{
        user,
        signIn,
        signOut,
        signUp,
        sendPasswordResetEmail,
        confirmPasswordReset
    }} >
        {props.children}
    </AuthContext.Provider>
    )
}





