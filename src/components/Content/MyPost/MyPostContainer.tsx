import React, {ChangeEvent, useState} from "react";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    addPostFormikActionCreator,
    updateNewPostTextActionCreator
} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {AppStateType} from "../../../Redux/redux-store";



const mapStateToProps = (state:AppStateType) => {
    return{
        profilePage : state.profilePage
    }

}
const mapDispatchToProps = (dispatch:any) => {
    return{
        addPost : ()=>{
            dispatch(addPostActionCreator())
        },
        onPostChange : (text:string)=>{
           dispatch(updateNewPostTextActionCreator(text))
        },
        addPostFormik : (text:string)=>{
           dispatch(addPostFormikActionCreator(text))
        }
    }

}

const myPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)

export default myPostContainer;