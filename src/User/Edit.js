import Axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { userApiPrefix } from '../Config';
import {
    statusListener,
    updatePassword
} from './Firebase';


export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            name: "",
            // oldPassword: "",
            newPassword: "",
        }
        this.getUser();
        this.onInputChange = this.onInputChange.bind(this);
        this.onNameButtonClick = this.onNameButtonClick.bind(this);
        this.onPasswordButtonClick = this.onPasswordButtonClick.bind(this);
    }

    getUser() {
        statusListener(this);
    }

    onInputChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    onNameButtonClick() {
        this.changeName();
        document.getElementById("name").value = "";
    }
    
    onPasswordButtonClick() {
        this.changePassword();
        document.getElementById("newPassword").value = "";
    }

    changeName() {
        const that = this;
        Axios.put(
            `${userApiPrefix}name/${this.state.user.id}/${this.state.name}`
        )
        .then(function(response) {
            alert("Name change successfully");
            that.setState({name: ""});
        })
        .catch(function(error) {
            console.log("Name change error");
        });
    }

    changePassword() {
        console.log(this.state.newPassword);
        updatePassword(this.state.newPassword);
    }


    render() {
        return (
            this.state.user === null ? 
            (
                <div>
                    <h2>You're not signed in</h2>
                    <Link to="/login">
                        <button onClick>Go sign in</button>    
                    </Link>
                </div>
            )
            :
            (
                <div>
                    <h2>Edit Profile</h2>

                    <div>
                        <label>Name:</label>
                        <br></br>
                        <input id="name" name="name" onChange={this.onInputChange}></input>
                        <button onClick={this.onNameButtonClick}>Update Name</button>
                        <br></br>

                        <div>
                            <label>Password:</label>
                            <br></br>
                            <div>
                                {/* <label>Old Password</label>
                                <input id="oldPassword" name="oldPassword" type="password" onChange={this.onInputChange}></input> */}
                                <label>New Password</label>
                                <input  id="newPassword" name="newPassword" type="password" onChange={this.onInputChange}></input>
                                <button onClick={this.onPasswordButtonClick}>Update Password</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        );
    }
}