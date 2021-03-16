import React, { Component } from 'react';
import Input from './common/input';
import { Container} from 'react-bootstrap';
import {register } from '../services/userService';
import auth from '../services/loginService';
class Register  extends Component {
    state = {  
        account:{
        name:'',
        email:'',
        password:''
        }};
        handleSubmit = async(e)=>{
            e.preventDefault();
            try {
                const response = await register(this.state.account);
                auth.loginWithJwt(response.headers["x-auth-token"]);
                window.location = "/";
                
            } catch (error) {
                if ( error.response && error.response.status === 400){
                    console.log(error)
                }
            }
        };
//######################## VALIDATION IS STILL NEEEDED ######################################
        handleChange = e =>{
            let account = {...this.state.account}
            account[e.target.name] = e.target.value
            this.setState({account});
        };
    render() { 
        return ( 
            <Container className="mt-5">
                <h1> This register form </h1>
                <form onSubmit={this.handleSubmit}>
                <Input 
                value={this.state.account.name}
                name="name"
                onChange={this.handleChange}
                label="name"
                 />
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
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </Container>
         );
    }
}
 
export default Register ;