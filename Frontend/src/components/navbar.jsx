import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
class Navbar extends Component {
    // to be added when we add profiles features 
    /*
            <li className="nav-item">
                <NavLink className="nav-link" to="/me">{user.name}</NavLink>
            </li>
    */
    render() { 
        const {user} = this.props;
        return (  
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Twinkle Todo App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>

                                {!user && (<React.Fragment> 
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                                </React.Fragment>)}

                                {user && (<React.Fragment> 
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                </li>
                                </React.Fragment>)}

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                     
                            </ul>

                        </div>
                     </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Navbar;