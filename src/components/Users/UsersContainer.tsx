import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {
    followAC, followThunkCreator, getUsersThunkCreator,
    setCurrentPageNumberAC,
    toggleIsFollowingAC,
    unFollowAC, unFollowThunkCreator
} from "../../Redux/user-reducer";
import UsersAPIComponent from "./UsersAPIComponent";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,

} from "../../Redux/users-selector";


/*const mapStateToProps = (state: any) => {
    return {
        users: state.userssPage.users,
        pageSize: state.userssPage.pageSize,
        totalUsersCount: state.userssPage.totalUsersCount,
        currentPage: state.userssPage.currentPage,
        isFetching: state.userssPage.isFetching,
        followingInProgress: state.userssPage.followingInProgress
    }
}*/

const mapStateToProps = (state: any) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setPageNumber: (pageNumber: number) => {
            dispatch(setCurrentPageNumberAC(pageNumber))
        },
        toggleIsFollowing: (followingInProgress: any, userId: number) => {
            dispatch(toggleIsFollowingAC(followingInProgress, userId))
        },
        getUsers: (currentPage: number, pageNumber: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageNumber))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowThunkCreator(userId))
        },
        follow: (userId: number) => {
            dispatch(followThunkCreator(userId))
        },

    }
}

//const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)



export default compose<React.ComponentType>(WithAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(UsersAPIComponent);


