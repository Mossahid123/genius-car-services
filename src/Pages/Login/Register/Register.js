import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user
  ] = useCreateUserWithEmailAndPassword(auth ,{emailVerificationOptions:true});
  const [updateProfile] = useUpdateProfile(auth);

  const [agree , setAgree] = useState(false)

    const navigate = useNavigate();

    const navigateLogin = event =>{
        navigate('/login')
    }
    const handleRegister = async(event) =>{
        event.preventDefault()
        const name = event.target.name.value ;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
         await createUserWithEmailAndPassword( email , password);
         await updateProfile({ displayName:name });
          navigate('/home')
    }
    return (
        <div className='register-container'>
            <h3 className='text-primary text-center'>Please Register</h3>
            <form onSubmit={handleRegister} className='form-container'>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <input type="email" name="email" id=""  placeholder='Your Email' required/>
                <input type="password" name="password" id="" placeholder='Your password' required/>
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree? 'ps-2 text-primary' : 'text-danger'} htmlFor="terms">Accept genius car terms and conditions</label>
                <input
                disabled={!agree} 
                className='bg-info border-0 rounded w-50 mx-auto'  
                type="submit"  
                value="Register" />
                <p className='text-center'>Already have an account? <Link className='text-danger pe-auto text-decoration-none' to='/login' onClick={navigateLogin}>Please Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;