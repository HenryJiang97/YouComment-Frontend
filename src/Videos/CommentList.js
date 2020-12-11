import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Comment from './Comment';
import Axios from 'axios';
import {commentApiPrefix} from '../Config';


class CommentList extends React.Component {

    componentDidMount() {
        const that = this;
        var videoId = this.props.videoId;
        console.log(videoId);
        const query = `${commentApiPrefix}videoId/${videoId}`;
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
        const data =this.props.commentList;
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