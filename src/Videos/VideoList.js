import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useHistory, Link } from 'react-router-dom';
import './VideoList.css';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '0',
        }
        
        this.showDetailComponent = this.showDetailComponent.bind(this);
    }


    handleVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    showDetailComponent(video){
        
        let newVideoList = [];
        newVideoList.push(video);
        this.setState({
            videoList: newVideoList,
            selected: '1',
        })
    }

    render() {
        return (
            <div>
                {this.state.selected === '0' ? <h1 class = "title">The top 5 most relevant videos: </h1> : null}
                <div class = 'listgroup'>
                    <ListGroup >
                        {
                        this.props.videosList.map((d) => (
                            <ListGroup.Item >
                                <Link to={{
                                    pathname:'/detail',
                                    query: {
                                        video: d,
                                        videosList: this.props.videosList,
                                        showDetailComponent: (x) => this.showDetailComponent(x)
                                    }
                                }}>
                                    {d.title}
                                </Link>
                            </ListGroup.Item>
                        ))

                        }    
                    </ListGroup>
                </div>
                <br></br>
                <div>
                    <Link to="/search">
                        <Button>Back</Button>
                    </Link>
                </div>
            </div>
        );
        
    }
    
}
export default VideoList;

