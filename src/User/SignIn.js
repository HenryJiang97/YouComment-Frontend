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
            usertype: "",
            password: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
        this.handleUserTypeClick = this.handleUserTypeClick.bind(this);
    }

    // Restore states after button clicked
    restoreStates() {
        this.setState({
            email: "",
            name: "",
            usertype: "",
            password: "",
        });
        document.getElementById("email").value = "";
        document.getElementById("name").value = "";
        document.getElementById("userRadio").checked = false;
        document.getElementById("adminRadio").checked = false;
        document.getElementById("password").value = "";
    }

    handleInputChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleUserTypeClick() {
        let chkUser = document.getElementById("userRadio");
        this.setState({
            usertype: chkUser.checked ? "User" : "Admin"
        })
    }

    handleSignUpClick() {
        if (this.state.email === "" || this.state.password === "" || this.state.name === "" || this.state.usertype === "") {
            alert("Please fill all the blanks");
        } else {
            createUserWithEmailAndPassword(this.state.email, this.state.password, this.state.name, this.state.usertype);
            this.restoreStates();
        }
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

                    <label for="usertype" class = 'label'>User Type: (Admin or User)</label>
                    <br></br>
                    {/* <input type="text" name="usertype" id="usertype" onChange={this.handleInputChange}></input>
                    <br></br> */}

                    <input type="Radio" name="usertype" value="user" id="userRadio" onClick={this.handleUserTypeClick} />User
                    <input type="Radio" name="usertype" value="admin" id="adminRadio" onClick={this.handleUserTypeClick} />Admin               
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