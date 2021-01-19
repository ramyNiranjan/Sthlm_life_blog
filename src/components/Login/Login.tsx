// Configure Firebase.
import React, { useContext } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import { Box } from '@chakra-ui/react'
import { UserContext } from '../../contexts/UserContext'

const config = {
  apiKey: 'AIzaSyCZR2DF973Aa3N7L2HWQSfKiP6OS2lvR3E',
  authDomain: 'sthlmblog.firebaseapp.com',
  projectId: 'sthlmblog',
  storageBucket: 'sthlmblog.appspot.com',
  messagingSenderId: '114591806784',
  appId: '1:114591806784:web:650ccf3d1e3d4774e1b6a5',
  measurementId: 'G-G080GS5BCH',
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const { isSignedIn, setSignedIn } = useContext(UserContext)

  const uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  }

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => setSignedIn(!!user))
  }, [])

  return (
    <Box>
      {isSignedIn ? (
        <>
          You are logged in.
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </>
      ) : (
        <>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </>
      )}
    </Box>
  )
}

export default Login
