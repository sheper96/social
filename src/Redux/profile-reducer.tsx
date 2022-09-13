import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SETUSERPROFILE = "SETUSERPROFILE";
const SETSTATUS = "SETSTATUS";
const SETLOGIN = "SETLOGIN";
const ADD_POST_FORMIK = "ADD_POST_FORMIK";


let initialState = {
    posts: [
        {id: 1, post: "hello", likes: 12},
        {id: 2, post: "im doing good", likes: 2}
    ],
    value: '',
    profile :null,
    statusValue:"",
    login: '123',
    password: '123',

}

let profileReducer = (state = initialState,action: any)=>{

    switch (action.type){
        case ADD_POST : {
            const newPost: any = {
                id: 5,
                post: state.value,
                likes: 0
            };
            return {...state,
            posts : [...state.posts , newPost]  ,
            value: ""};
        }
        case ADD_POST_FORMIK : {
            const newPost: any = {
                id: 5,
                post: action.postText,
                likes: 0
            };
            return {...state,
            posts : [...state.posts , newPost]  ,
            value: ""};
        }

        case UPDATE_NEW_POST_TEXT : {
            return {...state,value : action.newText};
        }
        case SETUSERPROFILE : {
            return {...state,profile : action.profile};
        }
        case SETSTATUS : {
            debugger
            return {...state,statusValue : action.statusValue};
        }
        case SETLOGIN : {
            return {...state,login : action.login};
        }
        default : return state
    }

}

export const addPostActionCreator = () => {

    return {
        type : ADD_POST
    }
}
export const addPostFormikActionCreator = (postText:string) => {

    return {
        type : ADD_POST_FORMIK,
        postText : postText
    }
}

export const updateNewPostTextActionCreator = (text:string) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile:any) => {

    return {
        type: SETUSERPROFILE,
        profile
    }
}

export const setProfileStatus = (statusValue:string) => {

    return {
        type: SETSTATUS,
        statusValue
    }
}

export const setLoginAC = (login:string) => {

    return {
        type: SETLOGIN,
        login
    }
}

export const getUserProfileThunkCreator = (userId:number) => {
    return (dispatch: any) => {
            usersAPI.getProfile(userId).then(response =>{
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getUserStatusThunkCreator = (userId:number) => {
    return (dispatch: any) => {
        profileAPI.getProfileStatus(userId).then(response =>{
            dispatch(setProfileStatus(response.data))
        })
    }
}
export const updateStatusThunkCreator = (status:string) => {
    return (dispatch: any) => {
        profileAPI.updateProfileStatus(status).then(response =>{
            debugger
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
    }
}


export default profileReducer;