import _ from "lodash";

export default (state={},action)=>{
    if(action.type=="CREATE_COMMENT"){
        
        return {...state,[action.payload.id]:action.payload}
    }
     if(action.type=="GET_COMMENTS"){
         console.log(action.payload.data)
        return {...action.payload.data.data.comment}
    }
    return state;
}