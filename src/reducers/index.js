import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import streamReducer from './streamReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer';
export default combineReducers({
   auth:authReducer,
   form:formReducer,
   streams: streamReducer,
   user:userReducer,
   comment:commentReducer
})