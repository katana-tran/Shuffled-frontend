import React from 'react';
import Form from './forms/form';
import '../style/form.css'


const Login = (props) => {
    const redirect = () => {
       props.history.push('/homepage') 
    }

    return(
        <div className="login">
            <div className="form">
                <Form redirect={()=> redirect()}/>
            </div>
            
        </div>
    )
}
  

export default Login;
