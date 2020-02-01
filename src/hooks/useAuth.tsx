import React, { useState, useEffect} from 'react'
import firebase from 'firebase'

interface IUser {
    //Later we will define it
}

const useAuth = (props: any) => {

    const [user, setUser] = useState<IUser | null>(null)

    /**
     * 
     * @param email 
     * @param password 
     */
    const signIn = (email: string , password: string) : any => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then( response => {
            setUser(response.user)
            return response.user
        })
    }

    /**
     * 
     * @param email 
     * @param password 
     */
    const signUp = (email: string, password: string) => {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(response => {
            setUser(response.user);
            return response.user;
          });
      };
    
      /**
       * 
       */
      const signOut = () => {
        return firebase
          .auth()
          .signOut()
          .then(() => {
            setUser(null);
          });
      };
    
      /**
       * 
       * @param email 
       */
      const sendPasswordResetEmail = (email: string) => {
        return firebase
          .auth()
          .sendPasswordResetEmail(email)
          .then(() => {
            return true;
          });
      };
    
      /**
       * 
       * @param code 
       * @param password 
       */
      const confirmPasswordReset = (code: string, password: string) => {
        return firebase
          .auth()
          .confirmPasswordReset(code, password)
          .then(() => {
            return true;
          });
      };

      useEffect(()=> {
          const unsubscribe = firebase.auth().onAuthStateChanged(user => {
              if(user){
                  setUser(user)
              }else{
                  setUser(null)
              }
          })
          //Make some clean up
          return () => unsubscribe()
      },[])

      return {
          user,
          signIn,
          signOut,
          signUp,
          sendPasswordResetEmail,
          confirmPasswordReset
      }
}

export default useAuth