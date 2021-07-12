import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import {connect} from 'react-redux';
import { capitalize, lowerCase } from 'lodash';
const Header=(props)=>{
    return (
    <div style={{padding:"10px"}} className="ui secondary pointing menu">
       
        <Link to="/" className="item">
            Streamy
        </Link>
       
        {props.name!=null  ? <h3 className="ui header" style={{margin:0,lineHeight:"2em"}}>Welcome ,{props.name}{`(${props.institution})`}</h3>:""}
      
      
        <div className="right menu">
       
            <Link to="/" className="item">
              All Streams  
            </Link>
            <Link to="/dashboard" className="item">
                My DashBoard
            </Link>
            <GoogleAuth/> 
            
        </div>

    </div>);

};
const mapStateToProps=(state)=>{
    console.log(state)
    return {name:state.auth.name,
    institution:state.user[state.auth?.userId]?.institution}
}
export default connect(mapStateToProps,{})(Header);