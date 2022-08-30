import React from "react";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    props: any


    componentDidMount() {

        this.props.getUsers(this.props.currentPage,this.props.pageNumber)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageNumber)
        this.props.setPageNumber(pageNumber)
    }


    render() {

        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followed={this.props.followed}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                toggleIsFollowing={this.props.toggleIsFollowing}
                followingInProgress={this.props.followingInProgress}
            />

        )
    }


}

export default UsersAPIComponent;