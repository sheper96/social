import React, {useState} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {Navigate} from "react-router-dom";
import ProfileStatus from "./ProfileInfo/ProfileStatus";
import {setProfileStatus} from "../../Redux/profile-reducer";



/*type ProfilePropsType ={
    profilePage:  ProfilePageType
   /!* store : any*!/
    dispatch : any

}*/



const Profile = (props:any)=>{

    return (<div>

            <ProfileInfo profile={props.profile} />
            <ProfileStatus status={props.statusValue}
                           setProfileStatus={props.setProfileStatus}
                           updateStatus={props.updateStatus}/>

            <MyPostContainer   />


        </div>
    )
}

export default Profile;