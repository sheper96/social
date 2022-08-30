import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false,
    isFetching: false
}

let authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default :
            return state;
    }


}


export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth:boolean) => {

    return {
        type: SET_USER_DATA,
        payload: {
            userId: userId,
            email: email,
            login: login,
            isAuth : isAuth
        }
    }
}

export const authThunkCreator  = ()=> {
    return (dispatch: any) => {
        authAPI.authMe().then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setUserData(id, email, login, true))

            }
        })
    }
}

export const loginThunkCreator  = (email:string,password:string,rememberMe:boolean)=> {
    return (dispatch: any) => {
        authAPI.login(email,password,rememberMe).then(response => {
            if (response.data.resultCode === 0) {
               dispatch(authThunkCreator())

            }
        })
    }
}

export const logoutThunkCreator  = ()=> {
    return (dispatch: any) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))

            }
        })
    }
}


export default authReducer;