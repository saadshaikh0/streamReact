import React from 'react';
import {connect} from 'react-redux';
import UserForm from './userForm';
import {signIn,signOut,createUser,getUsers} from '../actions';
class GoogleAuth extends React.Component{

    state={institution:null, newUser:false};



    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId:'194252383057-2advl80odjr1ars59uhlml5g531d2m5k.apps.googleusercontent.com',
            scope:'email profile' 
        }).then(()=>{
            this.auth=window.gapi.auth2.getAuthInstance();
           this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        })
        ;});
        this.props.getUsers();
    }
    componentDidUpdate(){
        if(this.state.institution){
            console.log(this.state.institution);
        }
    }
    setInstitution=(institution)=>{
        this.setState({institution:institution});
    }
    setNewUser=()=>{
        this.setState({newUser:false});
    }

    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            const BasicProfile=this.auth.currentUser.get().getBasicProfile();
            console.log(BasicProfile.getName());
            console.log(BasicProfile.getImageUrl());
            const authValues={userId:this.auth.currentUser.get().getId(),name:BasicProfile.getName(),url:BasicProfile.getImageUrl(),institution:this.props.institution};
            this.props.signIn(authValues);
           
            this.props.getUsers();
            
        
           if(authValues.userId in this.props.user ){
            
           }
           else{
            this.setState({newUser:true});
            
           }
        }
        else{
            this.props.signOut();
        }
    };
    onSignIn=()=>{
      
        this.auth.signIn();


    }
    onSignOut=()=>{
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn==null){
            return null;
        }
        else if(this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon"/>
                    Signout
                </button>
            );
        }
        else{
            return(
                <button className="ui red google button" onClick={this.onSignIn}>
                <i className="google icon"/>
                Sign In with google
            </button>
            );
        }
    }
    render(){
        
      
        return (
            <div>{this.renderAuthButton()}
            
            {this.state.newUser ? <UserForm  createUser={this.props.createUser} setInstitution={this.setInstitution} />:""}
            </div>
            
        );
    }
}
const mapStateToProps =(state)=>{
    return {isSignedIn:state.auth.isSignedIn,
        user : state.user,
        institution:state.auth.institution
    }
}
export default connect(mapStateToProps,{signIn,signOut,createUser,getUsers})(GoogleAuth);

//so now wer are in stream