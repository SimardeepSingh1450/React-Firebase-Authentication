import './App.css';
import { useEffect, useState } from 'react';
import {auth} from './Configurefirebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from 'firebase/auth'
function App() {
  const [loginPassword,setLoginPassword]=useState();
  const [loginEmail,setLoginEmail]=useState();
  const [registerEmail,setRegisterEmail]=useState();
  const [registerPassword,setRegisterPassword]=useState();
  const [displaylogoutmsg,setDisplaylogoutmsg]=useState(false);
  const [regmsg,setregmsg]=useState(false);
  const [logmsg,setlogmsg]=useState(false);
 

  const Login=async()=>{
    setlogmsg(true);
    const user=signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
      )
  }  

const Register=async()=>{
    setregmsg(true)
    const user=createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
      )
  }  

  const logout=async()=>{
    setDisplaylogoutmsg(true)
    await signOut(auth)
  }

  return (
    <div className="App">
    <div className='flexer'><img style={{height:50}} src="https://cdn.cdnlogo.com/logos/r/85/react.svg"/><h1>+</h1><img style={{height:50}} src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"/> <h1 style={{color:"orange"}}><span style={{color:'aqua'}}>React</span> Firebase Authentication</h1></div> 
      <h2>Register Here :</h2>
      <input onChange={(e)=>{setRegisterEmail(e.target.value)}} value={registerEmail||''} type='text' placeholder='Email...'/>
      <input onChange={(e)=>{setRegisterPassword(e.target.value)}} value={registerPassword||''} type='text' placeholder='Password...'/>
      <button onClick={()=>{Register()}}>Create User</button>
      <h5>{regmsg?(<h5>Registered Succesfully</h5>):(<h5></h5>)}</h5>
      <h5>NOTE : Password Must be Atleast 6 Alphabets</h5>
      <h2>Login Here :</h2>
      <input onChange={(e)=>{setLoginEmail(e.target.value)}} value={loginEmail||''} type='text' placeholder='Email...'/>
      <input onChange={(e)=>{setLoginPassword(e.target.value)}} value={loginPassword||""} type='text' placeholder='Password...'/>
      <button onClick={()=>{Login()}}>Login</button>
      <h5>{logmsg?(<h5>LoggedIn Succesfully,Refresh the Page...</h5>):(<h5></h5>)}</h5>
      <h2>Currently LoggedIn User:</h2>
      <h3>{auth.currentUser?auth.currentUser.email:"No User"}</h3>
      <button onClick={()=>{logout()}}>Sign Out</button>
      <h5>{displaylogoutmsg?(<h5>Logged out Successfully , Refresh the Page...</h5>):(<h5></h5>)}</h5>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
