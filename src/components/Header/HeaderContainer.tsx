import React from "react";
import {connect} from "react-redux";
import {authThunkCreator, logoutThunkCreator, setUserData} from "../../Redux/auth-reducer";
import HeaderAPIComponent from "./HeaderAPIComponent";


const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setUserData: (userId: number, email: string, login: string) => {
            dispatch(setUserData(userId, email, login,true))
        },
        authMe: () => {
            dispatch(authThunkCreator())
        },
        logout:()=>{
            dispatch(logoutThunkCreator())
        }

    }
}

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderAPIComponent)

export default HeaderContainer;