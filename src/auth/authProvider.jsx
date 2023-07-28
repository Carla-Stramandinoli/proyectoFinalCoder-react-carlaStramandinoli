import React from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import UserFormComponent from '../components/userComponent/userFormComponent';
import { auth } from '../firebase/config';

function AuthProvider ({children}){
  const [isAuth, setIsAuth] = React.useState(false);
  
  onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (!user) {
      if (isAuth) {
        setIsAuth(false);
      }
    } else {
      if (!isAuth) {
        setIsAuth(true);
      }
    }
  })

  return (
    <>
      {
        isAuth ?
          children
          :
          <UserFormComponent />
      }
    </>
  )
}

export default AuthProvider;