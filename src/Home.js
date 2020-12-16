import React from 'react';
import './Home.css';
import Axios from 'axios';
import {commentCountApiPrefix} from './Config';
import ReactPlayer from "react-player"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: null
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
                  video: response.data
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
                        this.state.video === null ? 
                        
                        null 
                        : 
                        
                        <div>
                            <h4>The most commented video is: </h4>
                            <div class = 'playerwraper'>
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${this.state.video[0].videoId}`}
                                    fluid={false}
                                    width={480}
                                    height={272}
                                    position='center'
                                />
                            </div>
                        </div>
                    }
                    
                </div>
                
            </div>
            
            
        );
    }
}