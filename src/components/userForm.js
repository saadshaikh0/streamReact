import React from 'react';
import Modal from './Modal';
import {connect} from 'react-redux';    

import history from '../history';
class UserForm extends React.Component{
    state={completed:false,value:null};
    componentDidMount(){
       
    }
    myChangeHandler=(e)=>{
      this.setState({value:e.target.value});
        
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        this.props.setInstitution(this.state.value);
        this.props.createUser({name:this.props.name,institution:this.state.value})
        console.log(this.state.value);
        this.setState({completed:true});
    }
    renderActions(){
      
        return(
        <React.Fragment>
            <form onSubmit={this.onSubmitHandler}>
      
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <button className="ui button primary">Submit</button>
      </form>
          
            </React.Fragment>);
    }
    renderContent(){
      return "Enter Your Institution Name ";

    }
    render(){
    return (
        <React.Fragment>
        { this.state.completed ?"":
        <Modal title="Enter Institution/ University"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=>history.push('/')}
               /> }
               </React.Fragment>
   );}
}


export default connect(null,{})(UserForm);