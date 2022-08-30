import styles from "./users.module.css";
import userImage from "../../Assets/images/userImage.png";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


const Users = (props:any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {props.isFetching && <Preloader/>}
                {pages.map(p => {

                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => props.onPageChanged(p)}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                             <NavLink to={'/profile/' +u.id }> <img src={u.photos.small ? u.photos.small : userImage} className={styles.userPhoto} /></NavLink>

                        </div>
                        <div>
                            {u.followed ? <button disabled={props.followingInProgress.some((id:any)=> id ===u.id)} onClick={
                                () => {
                                    props.unFollow(u.id)
                            }}>UnFollow</button> : <button disabled={props.followingInProgress.some((id:any)=> id ===u.id)} onClick={
                                () => {
                                    props.follow(u.id)
                                }
                            }
                            >Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                          <div>  {u.status}</div>
                          <div>  {u.id}</div>
                        </span>
                        <span>

                        </span>
                    </span>
                    </div>
                )
            }


        </div>
    )
}


export default Users;