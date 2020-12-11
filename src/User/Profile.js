import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {statusListener} from './Firebase';


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        this.getUser();
    }

    getUser() {
        statusListener(this);
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
                    <h2>User Profile</h2>

                    <div>
                        <label>UID:</label>
                        <br></br>
                        <label>{this.state.user.id}</label>
                        <br></br>

                        <label>Email:</label>
                        <br></br>
                        <label>{this.state.user.email}</label>
                        <br></br>

                        <label>Name:</label>
                        <br></br>
                        <label>{this.state.user.name}</label>
                        <br></br>

                        <label>User Type:</label>
                        <br></br>
                        <label>{this.state.user.type}</label>
                        <br></br>
                    </div>

                    <Link to="/edit">
                        <button>Edit Profile</button>
                    </Link>
                </div>
            )
        );
    }
}