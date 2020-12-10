import React, {Component} from 'react';

// Firebase authentication module
import {
    signOut
} from './Firebase';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleSignoutButtonClick = this.handleSignoutButtonClick.bind(this);
    }

    handleSignoutButtonClick() {
        signOut();
    }

    render() {
        return (
            <div>
                <h2>User Profile</h2>

                <div>
                    <label>UID:</label>
                    <br></br>
                    <label>{this.props.user.uid}</label>
                    <br></br>

                    <label>Email:</label>
                    <br></br>
                    <label>{this.props.user.email}</label>
                    <br></br>

                    <button onClick={this.handleSignoutButtonClick}>Sign out</button>
                </div>
            </div>
        );
    }
}