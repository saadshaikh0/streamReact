const INITIAL_STATE={
    isSignedIn:null,
    userId:null,
    name:null,
    url:null,
    institution:null
};
export default(state=INITIAL_STATE,action) =>{
    switch (action.type){
        case 'SIGN_IN':
            return {...state,isSignedIn:true,...action.payload}
        
        case 'SIGN_OUT':
            return {...state,isSignedIn:false,userId:null,name:null,
                url:null,institution:null}
        default:
            return state

    }
}