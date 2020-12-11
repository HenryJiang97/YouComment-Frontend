import React from 'react';

import {
    statusListener
} from '../User/Firebase';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            comment: this.props.comment,
        }
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        statusListener(this);
    }

    handleEditClick() {
        this.editComment();
    }

    handleDeleteClick() {
        this.deleteComment();
    }

    editComment() {

    }

    deleteComment() {
        this.props.deleteComment(this.state.comment.id);
    }


    render () {
        const comment = this.state.comment;
        return (
            <div>
                <div>
                    <div>UserId: {comment.posterName}</div>   
                    <div>Comment: {comment.content}</div>     
                    <div>Rating: {comment.rating}</div>
                </div>

                {
                    this.state.user != null && this.state.user.type === "Admin"
                    ?
                        <div>
                            <button onClick={this.handleEditClick}>Edit</button>
                            <button onClick={this.handleDeleteClick}>Delete</button>
                        </div>
                    :
                        <div></div>
                }
            </div>
        );  
    }

}
export default Comment;
