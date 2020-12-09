import React, {Component} from 'react';

import Profile from './Profile';

// Firebase authentication module
import Firebase from './Firebase';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';


export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.getSignInStatus = this.getSignInStatus.bind(this);
    }


    getSignInStatus() {

        return false;
    }

    render() {
        

        return (
            this.state.user ? 
            <Profile /> : 

            <div>
                <h2>You're not signing in yet.</h2>
                
            </div>
            
        );
    }
}