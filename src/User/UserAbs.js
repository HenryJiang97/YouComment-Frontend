/* eslint-disable react/prop-types */
import React from 'react';

export default class UserAbs extends React.Component {
    render() {
        return (
            <div>
                <h4>User Name: </h4>

                {this.props.user === undefined ? (
                    <h4>Guest</h4>
                ) : (
                    <h4>{this.props.user.email}</h4>
                )}
            </div>
        );
    }
}
