import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { signUp, error, setError, setName, name} = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')

    const getName = (e) => {
        setName(e.target.value)
        if (!setName) {
            setError('Name Field Cant Be Empty')
            return;
        }
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        if (!name) {
            setError('Name Field Cant Be Empty')
            return;
        }
        if(!/(\S+@\S+\.\S+)/.test(email))
        if (password.length < 6) {
         setError('Password Must be at least 6 characters long.')
         return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
             setError('Password Must contain 2 upper case')
      return;
        }
        signUp(email, password);   
    }
     
    return (
        <div className="my-5 overflow-hidden pb-5">
            <h1 className="text-center">Registration Here</h1>
            <div className="container d-flex flex-column align-items-center">
                <Form>
                <Form.Group className="mb-3 text-start" controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required onBlur={getName} placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onBlur={getEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Label className="text-start">Password</Form.Label>
                    <Form.Control required onBlur={getPassword} type="password" placeholder="Password" />
                </Form.Group>
                
                <h6 className="text-danger">{error}</h6>
                <Button onClick={handleSignUp} className="mb-5 sign-in" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default SignUp;