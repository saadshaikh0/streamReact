import _ from "lodash";

export default (state={},action)=>{
    if(action.type=="CREATE_USER"){
        
        return {...state,[action.payload.id]:action.payload}
    }
     if(action.type=="GET_USER"){
         console.log(action.payload.data)
        return {...state,..._.mapKeys(action.payload.data.data.users,"userId")}
    }
    return state;
}