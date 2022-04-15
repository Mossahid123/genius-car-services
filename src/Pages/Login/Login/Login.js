import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
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

    const navigateRegister = Event =>{
        navigate('/register')
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
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                   Login
                </Button>
            </Form>
            {errorElement}
            <p>New to genius car? <Link className='text-danger pe-auto text-decoration-none' to='/register' onClick={navigateRegister}>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
       
    );
};

export default Login;