import Navbar from './components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Twinkle from './components/twinkle';
import Login from './components/login';
import Logout from './components/logout';
import Register from './components/register';
import About from './components/about';
import NotFound from './components/common/notfound';
import React, { Component } from 'react';
import auth from './services/loginService';
class App extends Component {
  state ={};

  componentDidMount() {
    try {
      const user = auth.getCurrentUser();
      this.setState({user});      
    } catch (error) {};
  }
  
 /* <Route 
  path="/login" 
  render={(props)=> <Login {...props}/>} />  */
  render() { 
    return ( 
    <React.Fragment>
      <Navbar user= {this.state.user} />
      <div className="content">
        <Switch>
        <Route  path="/register" component={Register} />
        <Route path="/login" component={Login} /> 
        <Route path="/logout" component={Logout} />
        <Route path="/about" component={About} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Twinkle}/>
        <Redirect to="/not-found"/>
        </Switch>
      </div>
    </React.Fragment> 
    );
  }
}
 
export default App;

