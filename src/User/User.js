import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import SignIn from './SignIn';

import {
    statusListener,
} from './Firebase';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.handleStatusChange();
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleStatusChange() {
        statusListener(this);
    }

    render() {
        return (
            (
                this.state.user ? 
                    <div>
                        <h2>You're signed in</h2>
                        <Link to="/search"><button>Search Videos</button></Link>
                    </div>
                : 
                    <SignIn />
            )
        );
    }
}