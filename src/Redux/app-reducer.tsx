import {authAPI} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {authThunkCreator} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";


let initialState = {
    initialized: false,

}

let appReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default :
            return state;
    }


}


export const initializedSucces = () => {

    return {
        type: SET_INITIALIZED,

    }
}

export const initializeApp = () => (dispatch: any) => {
        let promise = dispatch(authThunkCreator())
        promise.then(() => {
            dispatch(initializedSucces())
        })



}


export default appReducer;