import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail  } from 'firebase/auth';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const {signInUsingGoogle, signInUsingFacebook} = useAuth();
    const auth = getAuth();

    const handelRegistration = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.lenght < 6){
            setError('Password must be at least 6 Charecter')
            return;
        }
        
        isLogin? processLogin(email, password): creatNewUser(email, password);
        

    }
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    const creatNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            emailVerify();
        })
        .catch(error =>{
            setError(error.message);
        })
    }
    const emailVerify = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result => {
            console.log(result);
        })
    }
    const resetPassword = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{ })
    }

    const handelEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handelPasswordChange = e =>{
      setPassword(e.target.value);
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className=' mt-5 bg-light rounded-3 shadow p-4'>
            <div>
            <form onSubmit={handelRegistration}>
                    <div className="row mb-3">
                        <h4 className='text-primary'>Please {isLogin ? 'Login Here' : 'Register Here'}</h4>
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label me-1">Email</label>
                        <div className="col-sm-12">
                        <input onBlur={handelEmailChange} type="email" className="form-control" id="inputEmail3" required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label me-1">Password</label>
                        <div className="col-sm-12">
                        <input onBlur={handelPasswordChange} type="password" className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                        <div className="text-center">
                            <input onChange={toggleLogin} className="form-check-input mx-2" type="checkbox" id="gridCheck1"/>
                            <label className="form-check-label fw-bold" htmlFor="gridCheck1">
                            Already Register
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="row mb-3">{error}</div>
                    <button type="submit" className="btn btn-primary fw-bold">{isLogin ? 'Login' : 'Register'}</button>
                    <button onClick={resetPassword} className='btn btn-danger ms-2 fw-bold text-light'>Reset Password</button>
                    </form>
            </div>
            <hr />
           <div className='mt-5'>
            <Button onClick={signInUsingGoogle} className='btn btn-warning fw-bold'>Sign In with Google</Button>
           </div>
           <div className='mt-5'>
            <Button onClick={signInUsingFacebook} className='btn btn-info fw-bold'>Sign In with Facebook</Button>
           </div>
            </div>
        </div>
    );
};

export default Login;