import streams from '../apis/streams';
import history from '../history';
import api from '../apis/express';
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';
export const signIn=(authValues)=>{
    return {
        type:'SIGN_IN',
        payload:authValues,
    };
}
export const signOut=()=>{
    return {
        type:'SIGN_OUT',
         
    };
}
export const createUser=(formValues={})=>async( dispatch,getState)=>{

   console.log(formValues);
    const response=await api.post("/users",{...formValues,...getState().auth})


    dispatch( {
        type:"CREATE_USER",
        payload:response
    });
}
export const getUsers = (formValues={})=> async (dispatch, getState)=>{
    
    const  response= await api.get("/users");

    dispatch({type:"GET_USER",payload:response});
}
export const createStream =(formValues)=> async (dispatch,getState) =>{
    const {userId} = getState().auth;
    const response=await streams.post('/streams',{...formValues,userId});
    dispatch({type:CREATE_STREAM , payload: response.data});
    history.push('/');
     
 };
 export const createComment =(formValues)=> async (dispatch,getState) =>{
     console.log(formValues);
    const {userId} = getState().auth;
    const response=await api.post('/comments',{...formValues,userId});
    dispatch({type:"CREATE_COMMENT" , payload: response.data});
   
     
 };
export const getComments=(id)=>async(dispatch,getState)=>{
   
    const response=await api.get(`/comments/${id}`);
    console.log(response)
    dispatch({type:"GET_COMMENTS",payload:response})
}
export const fetchStreams=()=> async dispatch=>{
    const response =await streams.get('/streams');
    dispatch({type:FETCH_STREAMS, payload :response.data});
}
export const fetchStream =(id)=>async dispatch =>{
    const response =await streams.get(`/streams/${id}`)
    dispatch({type:FETCH_STREAM , payload:response.data})
}

export const editStream= (id,formValues)=>async dispatch =>{
    const response =await streams.patch( `/streams/${id}`,formValues);
    dispatch({type:EDIT_STREAM, payload:response.data});
    history.push('/');
}
export const deleteStream =(id) => async dispatch =>{
    await streams.delete(`/streams/${id}`);
    dispatch({type : DELETE_STREAM, payload:id});
    history.push('/');
}