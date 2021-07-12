import React from 'react';

import {Field,  reduxForm} from 'redux-form';

class StreamForm extends React.Component{

    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
        
    }
    renderInput=(formProps)=>{
      const className=`field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
            <input {...formProps.input} autoComplete="off"/>
            {this.renderError(formProps.meta)}
            </div>);
        /*<input {...formProps.input}/> */
    }
    onSubmit=(formValues)=>{
       
        this.props.onSubmit(formValues);
    }
    displayStreamForm=()=>{
        return(<React.Fragment>
             <Field name="title"  component={this.renderInput} label="Enter Title"/>
            <Field name="description" component={this.renderInput} label="Enter Description"/>
            <Field name="subject" component={this.renderInput} label="Enter Subject"/>

        </React.Fragment>);
    }
    render(){
        
    return (
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
           {this.displayStreamForm()}
            <button className="ui button primary">Submit</button>
        </form>
    ); 
}}
const validate=(formValues)=>{
    const errors={};
    if(!formValues.title){
        errors.title="You must enter a title";
    }
    if(!formValues.description){
        errors.description="You must enter a description";
    }
    if(!formValues.subject){
        errors.subject="You must enter a subject";
    }
    return errors;
}
export default reduxForm({
    form:'streamForm',
    validate,
})(StreamForm);
