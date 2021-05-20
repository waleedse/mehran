
const current_state = {
    user:[],
    distributor:[]
}
const reducer = (state = current_state,action) =>{
    if(action.type == 'CHANGE_USER'){
        return {
            ...state,
            user:action.payload
        }
    }else if(action.type == 'CHANGE_DISTRIBUTOR'){
        return {
            ...state,
            distributor:action.payload
        }
    }
    return state;
}

export default reducer;