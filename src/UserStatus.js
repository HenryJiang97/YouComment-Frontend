import React from 'react';
import { statusListener } from './User/Firebase';

export default class UserStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        statusListener(this);
    }


    render() {
        return (
            <p>{this.state.user == null ? "Not signed in" : `Welcome, ${this.state.user.name}`}</p>
        );
    }
};