import React from 'react';
import Table from 'react-bootstrap/Table';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            video: this.props.video
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let video = this.state.video;
        video.showDetail = '1';
        this.props.showDetailComponent(video)
    }

    render () {
        const video =this.state.video;
        console.log(video.showDetail);
        if(video.showDetail === '1'){
            return (
                <div>
                    <Table size = "sm">
                        <thead>
                            <tr>
                                <th>Info</th>
                                <th>Value</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr>
                                <td>Video Title</td>
                                <td>{video.title}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{video.description}</td>
                            </tr>
                            <tr>
                                <td>Video Id</td>
                                <td>{video.videoId}</td>
                            </tr>
                            <tr>
                                <td>Publish Time</td>
                                <td>{video.publishTime}</td>
                            </tr>
                            <tr>
                                <td>Channel Title</td>
                                <td>{video.channelTitle}</td>
                            </tr>
                            <tr>
                                <td>Channel Id</td>
                                <td>{video.channelId}</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>
            );
        }else{
            return (
                <div>
                    <div onClick = {this.handleClick}>{video.title}</div>                    
                </div>
            );
        }
        
        
        
    }

}
export default Detail;




               