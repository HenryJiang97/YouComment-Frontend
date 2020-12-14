import React from 'react';
import Axios from 'axios';
import VideoList from './VideoList';
import './Result.css';
import {
    youtubeApiKey as APIkey,
    youtubeBaseUrl as baseUrl
} from '../Config';


class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videosList: [],
        };
        this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
    }


    componentDidMount(){
        this.setState({videosList: this.props.location.query.videosList});
        console.log("List: ", this.state.videosList);
        if (this.state.videosList.length === 0) {
            this.getYouTubeVideos();
        }
    }

    getYouTubeVideos(){
        console.log("Getting youtube videos");
        const that = this;
        const searchWord = this.props.location.query.searchWord;
        console.log(searchWord);

        Axios.get(baseUrl, { params: {
            part: 'snippet',
            maxResults: 10,
            key: APIkey,
            q: searchWord,
        }           
        })
        .then(function (response) {
            console.log("got response from youtube API using: " + searchWord);
            const res = response.data.items;
            var videosList = [];
            for(var i = 0; i < 5; i++){
                var video = res[i];
                videosList.push({
                    videoId: video.id.videoId,
                    channelId: video.snippet.channelId,
                    channelTitle: video.snippet.channelTitle,
                    description:video.snippet.description,
                    publishTime: video.snippet.publishTime,
                    title: video.snippet.title,
                    showDetail: false,
                })
            }
            console.log(videosList);
            that.setState({
                videosList: videosList,
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div class = 'Result'>
                <VideoList videosList={this.state.videosList} />
            </div>
        )
    }
}

export default Result;