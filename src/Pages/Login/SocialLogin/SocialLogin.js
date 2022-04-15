import React from 'react';
import google from '../../../images/social/social .png'
import facebook from '../../../images/social/facebook.png'
import gitHub from '../../../images/social/github.png'
import auth from '../../../firebase.init';
import {useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    
    if (error || error1) {
        errorElement = 
            <div>
                <p>Error: {error?.message} {error1.message}</p>
            </div>
    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='w-50 bg-dark' style={{ height: '1px' }}></div>
                <p className='mt-2 mx-2'>or</p>
                <div className='w-50 bg-dark' style={{ height: '1px' }}></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={()=>signInWithGoogle()} className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img style={{ width: '30px' }} src={google} alt="google" />
                    <span style={{ paddingLeft: '20px' }}> Google Singin</span></button>
                <button className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="google" />
                    <span style={{ paddingLeft: '20px' }}> Google Singin</span></button>
                <button className='btn btn-info d-block mx-auto w-50'
                onClick={()=>signInWithGithub()}>
                    
                    <img style={{ width: '30px' }} src={gitHub} alt="google" />
                    <span style={{ paddingLeft: '20px' }}> GitHub Sing In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;