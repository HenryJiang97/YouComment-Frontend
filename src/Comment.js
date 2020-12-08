import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: this.props.comment,
        }
    }
    render () {
        const comment = this.state.comment;
        return (
            <div>
                <div>UserId: {comment.id}</div>   
                <div>Comment: {comment.content}</div>     
                <div>Rating: {comment.rating}</div>            
            </div>
        );  
    }

}
export default Comment;
