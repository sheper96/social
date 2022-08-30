import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETUSERSCOUNT = 'SETUSERSCOUNT'
const SETPAGENUMBER = 'SETPAGENUMBER'
const SETFETCHING = 'SETFETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

let userReducer = (state = initialState, action: any) => {


    switch (action.type) {
        case FOLLOW : {
            debugger
            return {
                ...state, users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW : {
            debugger
            return {
                ...state, users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SETUSERS : {
            return {...state, users: action.users}
        }
        case SETUSERSCOUNT : {
            return {...state, totalUsersCount: action.usersCount}
        }
        case SETPAGENUMBER : {
            debugger
            return {...state, currentPage: action.pageNumber}
        }
        case SETFETCHING : {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING : {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default :
            return state
    }

}

export const followAC = (userId: any) => {

    return {
        type: FOLLOW,
        userId
    }
}
export const unFollowAC = (userId: any) => {

    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users: any) => {

    return {
        type: SETUSERS,
        users
    }
}
export const setUsersCountAC = (usersCount: number) => {

    return {
        type: SETUSERSCOUNT,
        usersCount
    }
}
export const setCurrentPageNumberAC = (pageNumber: number) => {

    return {
        type: SETPAGENUMBER,
        pageNumber
    }
}
export const toggleIsFetchingAC = (isFetching: boolean) => {

    return {
        type: SETFETCHING,
        isFetching
    }
}
export const toggleIsFollowingAC = (followingInProgress: any, userId: number) => {

    return {
        type: TOGGLE_IS_FOLLOWING,
        followingInProgress,
        userId
    }
}

export const getUsersThunkCreator = (currentPage: number, pageNumber: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true))

        usersAPI.getUser(currentPage, pageNumber).then(response => {
                dispatch(setUsersCountAC(response.totalCount))
                dispatch(setUsersAC(response.items))
                dispatch(toggleIsFetchingAC(false))


            }
        );
    }
}
export const unFollowThunkCreator = (userId: number,) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingAC(true, userId))
        usersAPI.unFollow(userId).then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unFollowAC(userId))
                }
                dispatch(toggleIsFollowingAC(false, userId))
            }
        )

    }
}

export const followThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingAC(true, userId))
        usersAPI.follow(userId).then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followAC(userId))
                }

                dispatch(toggleIsFollowingAC(false, userId))
            }
        )

    }
}


export default userReducer;