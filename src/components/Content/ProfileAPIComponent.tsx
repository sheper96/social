import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPostFormikActionCreator,
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    setProfileStatus,
    setUserProfile, updateStatusThunkCreator
} from "../../Redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileAPIComponent extends React.Component {


    props: any

    componentDidMount() {
        let userId = this.props.router.params.userId

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)

    }


    render() {


        return (
            <Profile profile={this.props.profile}
                     statusValue={this.props.statusValue}
                     setProfileStatus={this.props.setProfileStatus}
                     updateStatus={this.props.updateStatus}
            addPostFormik={this.props.addPostFormik}/>
        );
    }
}




const mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
        statusValue: state.profilePage.statusValue,
        isAuth: state.auth.isAuth
    }
}
/*
let AuthRedirectComponent = WithAuthRedirect(ProfileAPIComponent)


compose(withRouter(AuthRedirectComponent),connect(mapStateToProps, {
    setUserProfile: setUserProfile,
    getUserProfile: getUserProfileThunkCreator
}))(WithURrlDataContainerComponent)

let WithURrlDataContainerComponent = withRouter(AuthRedirectComponent)*/

export default compose<React.ComponentType>(connect(mapStateToProps, {
   // setUserProfile: setUserProfile,
    getUserProfile: getUserProfileThunkCreator,
    getUserStatus : getUserStatusThunkCreator,
    updateStatus : updateStatusThunkCreator,
    setProfileStatus,
    addPostFormik:addPostFormikActionCreator
}),withRouter,WithAuthRedirect)(ProfileAPIComponent);