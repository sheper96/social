import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
const mapStateToPropsForRedirect = (state: any) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component:any)=> {
    class RedirectComponent extends React.Component {
        props: any

        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return (
                <Component  {...this.props} />
            );
        }




    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}