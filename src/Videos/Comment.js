import React from 'react';
import Axios from 'axios';
import {commentApiPrefix} from '../Config';
import {
    statusListener
} from '../User/Firebase';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            comment: this.props.comment,
            edit: 0,    // 1->edit, 0->not edit
            newContent: ""
        }
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
        this.handleContentInput = this.handleContentInput.bind(this);
    }

    updateComment() {
        const that = this;
        Axios.get(
            `${commentApiPrefix}comment/${this.state.comment.id}`
        )
        .then(function (response){
            that.setState({
                comment: response.data
            })
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    componentDidMount() {
        statusListener(this);
    }

    handleEditClick() {
        this.setState({edit: 1});
    }

    handleDeleteClick() {
        this.deleteComment();
    }

    handleContentInput(evt) {
        this.setState({newContent: evt.target.value});
    }

    deleteComment() {
        this.props.deleteComment(this.state.comment.id);
    }

    handleSubmitButtonClick() {
        this.editComment(this.state.comment.id, this.state.newContent)
    }

    editComment(commentId, newContent) {
        let that = this;
        Axios.put(
            `${commentApiPrefix}content/${commentId}/${newContent}`
        )
        .then(function() {
            alert("Successfully edited comment");
            that.updateComment();
        })
        .catch(function() {
            alert("Edit comment error");
        })
        .then(function (params) {
            document.getElementById("commentInput").value = "";
            that.setState({
                newContent: "",
                edit: 0
            });
        });
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
                            <div>
                                <button onClick={this.handleEditClick}>Edit</button>
                                <button onClick={this.handleDeleteClick}>Delete</button>
                            </div>

                            {
                                this.state.edit === 1
                                ? 
                                    (
                                        <div>
                                            <label>Content</label>
                                            <input id="commentInput" onChange={this.handleContentInput}></input>
                                            <button onClick={this.handleSubmitButtonClick}>Submit</button>
                                        </div>
                                    )
                                :
                                    <div></div>
                            }
                        </div>
                    :
                        <div></div>
                }
            </div>
        );  
    }

}
export default Comment;
