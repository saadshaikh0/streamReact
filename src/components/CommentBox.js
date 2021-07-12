import React, { useEffect, useState } from 'react';
import '../comment.css';
import {animateScroll} from 'react-scroll';
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';
import {connect} from 'react-redux';
import {fetchStream,createComment,getComments} from '../actions';

let id=1;
const CommentBox= (props)=>{

    useEffect(()=>{
        props.getComments(props.streamId);
    },[])
    useEffect(()=>{
        console.log("use effect being called")
        setComments(Object.values(props.comments))
    },[props.comments])
    const scrollToBottom=()=>
    {
        animateScroll.scrollToBottom({containerId:"1", duration:100});
    }
    const [comment,setComment] = useState("");
    const [comments,setComments]=React.useState([]);
    
    useEffect(
        scrollToBottom
        ,[comments]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(comment);
        console.log(props)
        props.createComment({streamId:props.streamId,desc:comment})
        if (comment.length!=0)
        {
             setComments([...comments,{desc:comment,streamId:props.streamId,userId:props.userId}]);
        }
        setComment("");
        console.log(comments);
        const obj=document.querySelector(".comments");
        obj.scrollIntoView({behavior:"smooth"});
    }
    
    return (
        <div className="comment-container">
        <div className="comment-box">
            <div id="1" className="comments">
            {comments.map(val=><p key={id++}>{val.desc}</p>)}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your comment !"  value={comment} onChange={(e)=>setComment(e.target.value)}/>
                <button type="Submit">Send</button>
            </form>
        </div>
        </div>
    );
}
const mapStateToProps=(state,ownProps)=>{
    console.log(state);
    return {
            comments:state.comment,
            userId:state.auth.userId};
}
export default connect(mapStateToProps,{getComments,createComment})(CommentBox);