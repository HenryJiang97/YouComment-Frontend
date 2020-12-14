import React, {Component} from 'react';
import './Signin.css';
// Firebase authentication module
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from './Firebase';

import Button from 'react-bootstrap/Button';


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
    }

    // Restore states after button clicked
    restoreStates() {
        this.setState({
            email: "",
            name: "",
            password: "",
        });
        document.getElementById("email").value = "";
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    }

    handleInputChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSignUpClick() {
        console.log(this.state.email);
        createUserWithEmailAndPassword(this.state.email, this.state.password, this.state.name);
        this.restoreStates();
    }

    handleSignInClick() {
        signInWithEmailAndPassword(this.state.email, this.state.password);
        this.restoreStates();
    }


    render() {
        return (
            <div class = 'Signin'>
                <h1 class = 'headerSignIn'>Sign In</h1>
                <div >
                    {/* Account Info Form */}
                    
                    <label for="email" class = 'label'>Email:</label>
                    <br></br>
                    <input type="email" name="email" id="email" onChange={this.handleInputChange}></input>
                    <br></br>

                    <label for="name" class = 'label'>Name:</label>
                    <br></br>
                    <input type="text" name="name" id="name" onChange={this.handleInputChange}></input>
                    <br></br>

                    <label for="password" class = 'label'>Password:</label>
                    <br></br>
                    <input type="password" name="password" id="password" onChange={this.handleInputChange}></input>
                    <br></br>
                    
                    <br></br>
                    <div>
                        <Button variant="primary" onClick={this.handleSignUpClick}>SIGN UP</Button>
                        <div class = 'divider' />
                        <Button variant="success" onClick={this.handleSignInClick}>SIGN IN</Button>
                    </div>
                </div>
                
                
            </div>
        );
    }
}