import React from 'react';
import Detail from './Detail';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useHistory, withRouter } from 'react-router-dom';


class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '0',
        }
        
        this.showDetailComponent = this.showDetailComponent.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        useHistory.goBack();
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
                {this.state.selected === '0' ? <h1 className="title">The top 5 most relevant videos: </h1> : null}
                <ListGroup>
                    {
                    this.props.videosList.map((d) => (
                        <ListGroup.Item>
                            <Detail key={d.videoId} showDetail = '0' video ={d} showDetailComponent={(x) => this.showDetailComponent(x)}/>
                        </ListGroup.Item>
                    ))

                    }    
                </ListGroup>

                <Button onClick = {this.props.history.goBack}>Back</Button>
            </div>
        );
        
    }
    
}
export default withRouter(VideoList);

