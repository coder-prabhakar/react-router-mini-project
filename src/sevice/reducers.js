import { combineReducers } from 'redux';

const initialState = false;

const userStatus = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return action.currentStatus;
        case 'LOGOUT': 
            return action.currentStatus;
        default: return state;
    }
}

export default combineReducers({
    userStatus:userStatus,
})