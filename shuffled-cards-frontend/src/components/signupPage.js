import React from 'react';
import Form from './forms/signupForm';
import '../style/signup.css'


const Signup = (props) => {
    const redirect = () => {
        props.history.push('/')
    }

    return (
        <div className="login">
            <div className="form">
                <Form redirect={() => redirect()} />
            </div>

        </div>
    )
}


export default Signup;