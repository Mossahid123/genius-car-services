import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user
  ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = event =>{
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }
    const handleRegister = event =>{
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword( email , password)
    }
    return (
        <div className='register-container'>
            <h3 className='text-primary text-center'>Please Register</h3>
            <form onSubmit={handleRegister} className='form-container'>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <input type="email" name="email" id=""  placeholder='Your Email' required/>
                <input type="password" name="password" id="" placeholder='Your password' required/>
                <input className='bg-info border-0 rounded' type="submit" value="Register" />
                <p>Already have an account? <Link className='text-danger pe-auto text-decoration-none' to='/login' onClick={navigateLogin}>Please Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;