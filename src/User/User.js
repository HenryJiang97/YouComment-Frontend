import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import SignIn from './SignIn';

import {
    statusListener,
    signOut
} from './Firebase';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.handleStatusChange();
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleSignoutButtonClick = this.handleSignoutButtonClick.bind(this);
    }

    handleStatusChange() {
        statusListener(this);
    }

    handleSignoutButtonClick() {
        signOut();
    }

    render() {
        return (
            (
                this.state.user ? 
                    <div>
                        <h2>You're signed in</h2>
                        <Link to="/search"><button>Search Videos</button></Link>
                        <button onClick={this.handleSignoutButtonClick}>Sign out</button>
                    </div>
                : 
                    <SignIn />
            )
        );
    }
}