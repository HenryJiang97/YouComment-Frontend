import React from 'react';
import ReactPlayer from "react-player"

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CommentList from './CommentList';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {statusListener} from '../User/Firebase';
import {commentApiPrefix} from '../Config';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            video: this.props.location.query.video,
            commentList:[],
            content:'',
            rating:'',
            showComments: '0',
        }

        this.getUser();
        this.updateCommentList();

        this.onRatingChange = this.onRatingChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onView = this.onView.bind(this);
    }

    getUser() {
        statusListener(this);
        console.log(this.state.user);
    }

    
    onView(){
        this.setState({
            showComments : '1',
        })
    }

    onRatingChange(evt) {
        this.setState({ rating: evt.target.value });
    }

    onContentChange(evt) {
        this.setState({ content: evt.target.value });
    }

    updateCommentList() {
        const that = this;
        Axios.get(
            `${commentApiPrefix}videoId/${this.state.video.videoId}`
        )
        .then(function (response){
            // console.log(response.data);
            that.setState({
                commentList: response.data
            })
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    postComment(content, rating, videoId) {
        const that = this;
        Axios.post(
            commentApiPrefix, 
            {
              id: uuidv4(), //need to change later
              rating: rating,
              content: content,
              videoId: videoId,
              posterId: that.state.user.id,
              posterName: that.state.user.name
            }
          ).then(function() {
              alert('successfully posted your comment');
              that.setState({
                showComments : '1',
              })
          })
          .catch(error => console.log(error))
          .then(function(){
              that.setState({
                content:'',
                rating:'',
              })
              document.getElementById("content").value = "";
              document.getElementById("rating").value = "";
              that.updateCommentList();
          })

    }

    deleteComment(commentId) {
        const that = this;
        Axios.delete(
            `${commentApiPrefix}${commentId}`
        )
        .then(function(response) {
            alert("Successfully deleted comment");
            that.updateCommentList();
        })
        .catch(function(error) {
            console.log("Delete comment error");
        });
    }

    onSubmit() {
        const that = this;
        const content = this.state.content;
        const rating = this.state.rating;
        const videoId = this.state.video.videoId;
        console.log(content+ '........' + rating + '.......'+videoId);
        that.postComment(content, rating, videoId);
    }
    

    render () {
        const video =this.state.video;
        const commentList = this.state.commentList;
        console.log(video);
        console.log(commentList);


        return (
            <div>
                {/* Video player */}
                <div>
                    <h3>Video</h3>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${video.videoId}`}
                    />
                </div>
                
                {/* Video details */}
                <Table size = "sm">
                    <thead>
                        <tr>
                            <th>Info</th>
                            <th>Value</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <td>Video Title</td>
                            <td>{video.title}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{video.description}</td>
                        </tr>
                        <tr>
                            <td>Video Id</td>
                            <td>{video.videoId}</td>
                        </tr>
                        <tr>
                            <td>Publish Time</td>
                            <td>{video.publishTime}</td>
                        </tr>
                        <tr>
                            <td>Channel Title</td>
                            <td>{video.channelTitle}</td>
                        </tr>
                        <tr>
                            <td>Channel Id</td>
                            <td>{video.channelId}</td>
                        </tr>
                        
                    </tbody>
                </Table>

                {/* Comments */}
                <div>
                    <h3>Comments</h3>
                    <div>
                        <Button onClick={this.onView}>View Comments</Button>
                    </div>
                    {
                        this.state.showComments === '1'
                        ? 
                            <CommentList
                                videoId={this.state.video.videoId}
                                commentList={this.state.commentList}
                                deleteComment={(commentId) => this.deleteComment(commentId)}
                            />
                        : 
                            null
                    }
                </div>
                

                {/* Leave comments */}
                <div>
                    <h4>Leave comments</h4>
                    {this.state.user == undefined
                    ?
                        (
                            <div>
                                <h4>You're not signed in</h4>
                                <Link to="/login">
                                    <button>Go Sign In</button>
                                </Link>
                            </div>
                        )
                    :
                        (
                            <div>
                                <h5>New Comment:</h5>
                                <div>Comment: 
                                    <input
                                            id="content"
                                            onChange={this.onContentChange}></input>
                                </div>
                                <div>Rating(1~5):
                                    <input
                                            id="rating"
                                            onChange={this.onRatingChange}></input>
                                </div>
                                <div>
                                    <button onClick={this.onSubmit}>Submit</button>
                                </div>
                            </div>
                        )
                    }
                </div>
                

                {/* Go Back */}
                <Link to={{
                    pathname: "/result",
                    query: {
                        videosList: this.props.location.query.videosList,
                        searchWord: "",
                    }
                }}>
                    <Button>Back</Button>
                </Link>
            </div>
        );
    }
}


export default Detail;




               