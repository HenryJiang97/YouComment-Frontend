import React from 'react';
import Axios from 'axios';
import VideoList from './VideoList.js';

const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
const APIkey = 'AIzaSyCB0KooQ52eIZKR_kieRhEbrcGvbfBH-lg';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'search',
            searchWord: '',
            videos:[],
            selectedVideo: null,
        };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
    }

    onInputChange(evt) {
        this.setState({ searchWord: evt.target.value });
    }

    onSubmitButtonClick() {
        this.getYouTubeVideos();
    }

    getYouTubeVideos(){
        const that = this;
        const searchWord = this.state.searchWord;
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
                //console.log(videosList);
                that.setState({
                    videos: videosList,
                    page: 'videoList',
                })
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    handleVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        if(this.state.page === 'search'){
            return (
                <div>
                    <h1>Search for Videos</h1>
    
                    <div>
                        <input
                            id="searchWord"
                            onChange={this.onInputChange}></input>
                    </div>
    
                    <div>
                        <button onClick={this.onSubmitButtonClick}>Submit</button>
                    </div>
    
                </div>
            );
        }else{
            return (
                <div>                    
                    <VideoList videoList={this.state.videos} handelVideoSelect = {this.handleVideoSelect}/>
                </div>             
            )
        }
        
    }
}