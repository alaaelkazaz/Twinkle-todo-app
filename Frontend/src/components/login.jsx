import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Container} from 'react-bootstrap';
import Input from './common/input';
import auth from '../services/loginService';

class Login extends Component {
    state={
    account:{
    email:'',
    password:''
    }
    };
    handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const { account } = this.state;
            const result = await auth.login(account.email, account.password);
            if(result) {
                window.location = '/';
            }
          } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                console.log('error in logging ')
            }
          }
    };
    handleChange = e =>{
        let account = {...this.state.account}
        account[e.target.name] = e.target.value
        this.setState({account});

    };
    render() { 
        if (auth.getCurrentUser()) return <Redirect to="/" />;
        return (  
            <Container className="mt-5">
            <h1> Twinkle login Form </h1>
            <form onSubmit={this.handleSubmit }>
                <Input 
                value={this.state.account.email}
                name="email"
                onChange={this.handleChange}
                label="Email" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <Input
                value={this.state.account.password}
                name="password"
                onChange={this.handleChange}
                label="Password" />


                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </Container>
            
        );
    }
}
 
export default Login;