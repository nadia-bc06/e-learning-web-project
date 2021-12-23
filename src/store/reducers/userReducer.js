import * as types from './../../constants/actionTypes';

export const initialState = {
    accountInfo: [],
}

const userReducer = (state = initialState , action) =>{
    switch(action.type){
        case types.LOGOUT_ACCOUNT:
            state.accountInfo = action.data;
            return {...state}
        case types.GET_ACCOUNT_INFO:
            state.accountInfo = action.data;
            return {...state}
        default: return {...state}
    }
}

export default userReducer;