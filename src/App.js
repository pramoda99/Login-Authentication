import React, { useState, useEffect } from "react";
import './App.css';
import Login from "./components/Login";
import Hero from "./components/Hero";
import fireb from "./fireb";


const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);


  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

const handleLogin = () => {
  clearErrors();
  fireb 
  .auth()
  
  .signInWithEmailAndPassword(email, password)
  .catch((err) => {
    switch (err.code) {
      case "auth/invalid-email":
        case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
    }
  });
};


const handleSignup = () => {
  clearErrors();
  fireb
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(err => {
    switch (err.code) {
      case "auth/email-already-in-use":
        case "auth/invalid-email":
        
            setEmailError(err.message);
            break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
    }
  });
};

const handleLogout = () => {
  fireb.auth().signOut();
};

const authListner = () => {
  fireb.auth().onAuthStateChanged((user) => {
    if(user){
      clearInputs();
      setUser(user);

    } else {
      setUser("");
    }
  });

};

useEffect(() => {
  authListner();
},
[]);

  return (
  <div className="App"> 
  {user ? (
 <Hero handleLogout={handleLogout}/>
  ):(
<Login 
   email={email} 
   setEmail={setEmail}
   password={password} 
   setPassword={setPassword} 
   handleLogin={handleLogin}
   handleSignup={handleSignup}
   hasAccount={hasAccount}
   setHasAccount={setHasAccount}
   emailError={emailError}
   passwordError={passwordError}
   />
  
  )}
  
  </div>
  );
};

export default App;
