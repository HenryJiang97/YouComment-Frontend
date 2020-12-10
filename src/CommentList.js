import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Comment from './Comment';
import Axios from 'axios';

const prefix = 'https://you-comment-backend.herokuapp.com/api/comment/';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.videoId,
            commentList:[],
        }
    }

    componentDidMount() {
        const that = this;
        var videoId = this.state.videoId;
        console.log(videoId);
        const query = `${prefix}videoId/${videoId}`;
        console.log(query);
        Axios.get(query)
          .then(function (response){
              console.log(response.data);
              that.setState({
                  commentList: response.data
              })
          })
          .catch(function (error) {
            console.log(error);
          });
      }


    render() {
        const data =this.state.commentList;
        console.log('comment list'+ data);
        if(data === null){
            return;
        }
        
        return (
            <div>
                <ListGroup>
                    {
                    data.map((d) => (
            
                        <ListGroup.Item>
                            <Comment key={d.id} comment = {d} />
                        </ListGroup.Item>
                    ))

                    }    
                </ListGroup>
            </div>
        );
        
    }
    
}
export default CommentList;