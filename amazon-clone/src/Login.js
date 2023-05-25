import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';




function Login() {
    const navigate = useNavigate();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); // this stops the refresh .

        auth.signInWithEmailAndPassword(email,password)

            .then((auth) => {
                // logged in redirected to the homepage 
                navigate("/");
            })

            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault(); // this stops the refresh .

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // created a user and logged in , redirected to message.
            navigate("/");
        })

        .catch((e) => alert(e.message));
    };

  return (
    <div className='login'>
        <Link to ="/">
          <img
          className='login_logo'
          src='https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png'
          alt=''
          />




        </Link>

        <div className='login_container'>
            <h1> Sign-in</h1>
            
            <form>
            <h5> E-mail</h5>
            <input value={email} onChange={event => setEmail(event.target.value)} type='email'  />
            <h5>Password</h5>
            <input value={password} onChange={event => setPassword(event.target.value)} type='password'  />
            <button onClick={login} type='submit' className='login_signinbutton'>Sign In</button>
            </form>

            <p>
                By signing in you agree to amazon's terms and condition.



            </p>
            <button onClick={register} className='login_registerbutton'> Create Your Amazon Account</button>
        </div>



    </div>
  )
}

export default Login;