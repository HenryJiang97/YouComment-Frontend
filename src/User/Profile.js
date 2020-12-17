/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { statusListener } from './Firebase';
import './Profile.css';
import Button from 'react-bootstrap/Button';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
        this.getUser();
    }

    getUser() {
        statusListener(this);
    }

    render() {
        return this.state.user === null ? (
            <div className="Profile">
                <h2 className="profileHeader">You're not signed in</h2>
                <Link to="/login">
                    <Button variant="primary">Go sign in</Button>
                </Link>
            </div>
        ) : (
            <div className="Profile">
                <h2 className="profileHeader">User Profile</h2>

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
        );
    }
}
