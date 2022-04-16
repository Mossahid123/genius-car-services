import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user ,error
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );

    const navigateRegister = Event =>{
        navigate('/register')
    }
    const resetPassword = async() =>{
        const email = emailRef.current.value ;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    if (error ) {
        errorElement = 
            <div>
                <p>Error: {error?.message}</p>
            </div>
    }
    if(user){
        navigate('/home')
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value ;
        const password = passwordRef.current.value;
       signInWithEmailAndPassword(email , password);
    }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <h3 className='text-primary text-center'>Please Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                   Login
                </Button>
            </Form>
            {errorElement}
            <p className=' text-center mt-2'>New to genius car? <Link className='text-primary pe-auto text-decoration-none' to='/register' onClick={navigateRegister}>Please Register</Link></p>
            <p className=' text-center mt-2'>forget password? <Link className='text-peimary pe-auto text-decoration-none' to='/register' onClick={resetPassword}>Reset password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
       
    );
};

export default Login;