/* eslint-disable react/prop-types */
import React from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import './Search.css';
import { youtubeApiKey as APIkey, youtubeBaseUrl as baseUrl } from '../Config';

import Button from 'react-bootstrap/Button';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '',
            searchWord: '',
            videos: [],
            selectedVideo: null,
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(evt) {
        this.setState({ searchWord: evt.target.value });
    }

    getYouTubeVideos() {
        const that = this;
        const searchWord = this.props.location.query.searchWord;
        console.log(searchWord);

        Axios.get(baseUrl, {
            params: {
                part: 'snippet',
                maxResults: 10,
                key: APIkey,
                q: searchWord,
            },
        })
            .then(function (response) {
                console.log(
                    'got response from youtube API using: ' + searchWord
                );
                const res = response.data.items;
                var videosList = [];
                for (var i = 0; i < 5; i++) {
                    var video = res[i];
                    videosList.push({
                        videoId: video.id.videoId,
                        channelId: video.snippet.channelId,
                        channelTitle: video.snippet.channelTitle,
                        description: video.snippet.description,
                        publishTime: video.snippet.publishTime,
                        title: video.snippet.title,
                        showDetail: false,
                    });
                }
                // console.log(videosList);
                that.setState({
                    videosList: videosList,
                });
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });
    }

    handleVideoSelect = video => {
        this.setState({
            selectedVideo: video,
        });
    };

    showDetailComponent(video) {
        let newVideoList = [];
        newVideoList.push(video);
        this.setState({
            videoList: newVideoList,
            selected: '1',
        });
    }

    render() {
        return (
            <div className="Search">
                <div className="searchHeader">
                    <h1 className="searchh1">Search for Videos</h1>

                    <div>
                        <input
                            id="searchWord"
                            onChange={this.onInputChange}></input>
                    </div>

                    <div>
                        <Link
                            to={{
                                pathname: '/result',
                                query: {
                                    videosList: [],
                                    searchWord: this.state.searchWord,
                                },
                            }}>
                            <br></br>
                            <Button>Submit</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Search);
