import * as types from './../constants/actionType'
const initialState = ""

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_FILTER:
            
            state = action.filter;
            
            return  state 

        default:
            return state
    }
}
