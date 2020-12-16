import React from 'react';
import './Home.css';
import Axios from 'axios';
import {commentCountApiPrefix} from './Config';
import ReactPlayer from "react-player"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: ''
        };
    }

    componentDidMount(){
        const that = this;
        var videoId = this.props.videoId;
        console.log(videoId);
        const query = `${commentCountApiPrefix}`;
        console.log(query);
        Axios.get(query)
          .then(function (response){
              console.log(response.data);
              that.setState({
                  videoId: response.data
              })
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <div class = 'Home'>
                <div class = "header">
                    <h1>Welcome to YouComment!</h1>
                    <p>This is an app to search for Youtube Video and comment it.</p>
                </div>
                <div>
                    {
                        this.state.videoId === '' ? 
                        
                        null 
                        : 
                        
                        <div class = 'playerwraper'>
                            <h4>The most commented video is: </h4>
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${this.state.videoId}`}
                                fluid={false}
                                width={480}
                                height={272}
                                position='center'
                            />
                        </div>
                    }
                    
                </div>
                
            </div>
            
            
        );
    }
}