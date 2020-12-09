import React, {Component} from 'react';

// Firebase authentication module
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from './Firebase';


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
        createUserWithEmailAndPassword(this.state.email, this.state.password, this.state.name);
        this.restoreStates();
    }

    handleSignInClick() {
        signInWithEmailAndPassword(this.state.email, this.state.password);
        this.restoreStates();
    }


    render() {
        return (
            <div>
                <h2>Sign In</h2>

                {/* Account Info Form */}
                <label for="email">Email:</label>
                <br></br>
                <input type="email" name="email" id="email" onChange={this.handleInputChange}></input>
                <br></br>

                <label for="name">Name:</label>
                <br></br>
                <input type="text" name="name" id="name" onChange={this.handleInputChange}></input>
                <br></br>

                <label for="password">Password:</label>
                <br></br>
                <input type="password" name="password" id="password" onChange={this.handleInputChange}></input>
                <br></br>
                
                <br></br>
                <div>
                    <button onClick={this.handleSignUpClick}>SIGN UP</button>
                    <button onClick={this.handleSignInClick}>SIGN IN</button>
                </div>
                
            </div>
        );
    }
}