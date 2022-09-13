export const getUsers = (state:any)=>{
    return state.userPage.users
}
export const getPageSize = (state:any)=>{
    return state.userssPage.pageSize
}
export const getTotalUsersCount = (state:any)=>{
    return state.userssPage.totalUsersCount
}
export const getCurrentPage = (state:any)=>{
    return state.userssPage.currentPage
}
export const getIsFetching = (state:any)=>{
    return state.userssPage.isFetching
}
export const getFollowingInProgress = (state:any)=>{
    return state.userssPage.followingInProgress
}




