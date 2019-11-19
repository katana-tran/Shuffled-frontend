import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'





class NormalLoginForm extends React.Component {
    
    state = {
        invalid: false,
    }

   
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            let username = values.username
            let password = values.password
            if (!err) {
                console.log('Received values of form: ', values);
                fetch("http://localhost:3000/auth",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({

                            username,
                            password

                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.jwt)     
                    })
                    .then(this.props.redirect())
                    .catch(
                        (error) => {
                            console.log(error)
                            this.setState({
                                invalid: true
                            })
                        }
                    );

            }
            }
        );
    };

   

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{padding: '5%'}}>
                {this.state.invalid && <p>Invalid Username or Password</p>}
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="http://localhost:3001/">
                        Forgot password
          </a>
          <br/>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                    Or <a href='http://localhost:3001/signup'>register now!</a>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegistration = Form.create({ name: 'registrationform' })(NormalLoginForm);
export default WrappedRegistration;
