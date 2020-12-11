import React from 'react';
import Detail from './Detail';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList: this.props.videoList,
            selected: '0',
        }
        this.showDetailComponent = this.showDetailComponent.bind(this);
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
        const data =this.state.videoList;
        
        return (
            <div>
                {this.state.selected === '0' ? <h1 className="title">The top 5 most relevant videos: </h1> : null}
                <ListGroup>
                    {
                    data.map((d) => (
            
                        <ListGroup.Item>
                            <Detail key={d.videoId} showDetail = '0' video ={d} showDetailComponent={(x) => this.showDetailComponent(x)}/>
                        </ListGroup.Item>
                    ))

                    }    
                </ListGroup>
                <Button onClick = {this.props.return}>Back</Button>
            </div>
        );
        
    }
    
}
export default VideoList;

