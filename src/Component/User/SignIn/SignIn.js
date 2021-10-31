import React, { useState } from 'react';
import { Button,  Col,  Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './SignIn.css'



const SignIn = () => {
    const {signIn, error, gooleSignIn, setError, setIsLoading, setUser}=useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    
    const history = useHistory()
    const location = useLocation()
    const url= location.state?.from || "/home"
    
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        signIn(email, password)
            .then(result => {
                setIsLoading(true)
                const user = result.user;
                setUser(user)
                setError('')
                history.push(url)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false))
    }
    const HandleGooleSignIn = () => {
        gooleSignIn()
        .then(result => {
                setIsLoading(true)
                const user = result.user;
                setUser(user)
                history.push(url)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="my-5 overflow-hidden pb-5">
            <h1 className="text-center text-color">Welcome To Pacific Medical Center</h1>
            <div className="container d-flex flex-column align-items-center">
            <Form className="pt-5 pb-2 " >
                <Form.Group  className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                </Form.Group>
                <h6 className="text-danger">{error}</h6>
            <button onClick={handleSignIn} className="sign-in text-white" type="submit">
                Sign In
            </button>   
            </Form>
            <h4 className="text-center">Or</h4>
            <button className="googlesign-in text-white d-flex" onClick={HandleGooleSignIn}><img className="mx-3" height="30px"  alt="" /> Sign in with google</button>
                <br />
                
            <p className="d-inline me-3">Create a new account here</p>
            <Link to="/signUp">Sign Up</Link> 
        </div>
        </div>
    );
};

export default SignIn;