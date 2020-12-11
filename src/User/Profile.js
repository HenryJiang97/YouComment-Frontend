import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {statusListener} from './Firebase';

// Firebase authentication module
import {
    signOut
} from './Firebase';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        this.getUser();
        this.handleSignoutButtonClick = this.handleSignoutButtonClick.bind(this);
    }

    getUser() {
        statusListener(this);
    }

    handleSignoutButtonClick() {
        signOut();
    }

    render() {
        return (
            this.state.user === null ? 
            (
                <div>
                    <h2>You're not signed in</h2>
                    <Link to="/">
                        <button onClick>Go sign in</button>    
                    </Link>
                </div>
            )
            :
            (
                <div>
                    <h2>User Profile</h2>

                    <div>
                        <label>UID:</label>
                        <br></br>
                        <label>{this.state.user.uid}</label>
                        <br></br>

                        <label>Email:</label>
                        <br></br>
                        <label>{this.state.user.email}</label>
                        <br></br>

                        <button onClick={this.handleSignoutButtonClick}>Sign out</button>
                    </div>
                </div>
            )
        );
    }
}