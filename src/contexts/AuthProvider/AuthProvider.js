import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
export const AuthContext= createContext();
const auth= getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]= useState(true);

  const createUser= (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const login= (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  const logout=()=>{
    return signOut(auth);
  }
  useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth, currentUser=>{
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return () =>{
      return unsubscribed();
    }
  },[])
  const authInfo={
    user,
    loading,
    createUser,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;