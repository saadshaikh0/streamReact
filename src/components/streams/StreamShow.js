import React from 'react';
import flv from 'flv.js';
import {connect} from 'react-redux';
import {fetchStream,createComment,getComments} from '../../actions';
import CommentBox from '../CommentBox';
import {Grid} from '@material-ui/core'

class StreamShow extends React.Component{



    constructor(props){
        super(props);
        this.vidoRef=React.createRef();
    }
    componentDidMount(){
        console.log(this.props.comments);
        console.log(this.vidoRef);
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
        this.props.getComments(this.props.match.params.id);
    }

    componentDidUpdate(prevProps){
        this.buildPlayer();
      
     
      
    }
    componentWillUnmount(){
        this.props.getComments(0);
    }
    buildPlayer(){
        const {id}=this.props.match.params;
        if(this.player || !this.props.stream){
            return;
        }
        this.player= flv.createPlayer({
            type:'flv',
            url:`http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.vidoRef.current);
        this.player.load();
    }
    render(){
        
        if(!this.props.stream){
            return <div>Loading..</div>
        }
        const {title,description}=this.props.stream;
        return(
            <div style={{padding:"15px" }}>
        <div>
            <video ref={this.vidoRef} style={{width:'100%'}} controls/>
            <Grid container spacing={3} style={{marginTop:"10px"}}>
            <Grid sm={8}>
            <h1>{title}</h1>
            </Grid>
            <Grid sm={4} style={{alignSelf:'center'}}>
            <h3 >Rating <span style={{color:"yellow"}}>5 ☆</span>   </h3>
            </Grid>

            </Grid>
           
            <h5>{description}</h5>
        </div>
        <React.Fragment>
            <CommentBox streamId={this.props.match.params.id}/>
        </React.Fragment>
        </div>
        );

    }
}
const mapStateToProps=(state,ownProps)=>{
    console.log(state)
    return {stream:state.streams[ownProps.match.params.id],
            comments:state.comment};
}
export default connect(mapStateToProps,{fetchStream,getComments,createComment})(StreamShow);