import React, {Component} from 'react';

import Profile from './Profile';
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
                    <Profile user={this.state.user}/> 
                : 
                    <SignIn />
            )
        );
    }
}