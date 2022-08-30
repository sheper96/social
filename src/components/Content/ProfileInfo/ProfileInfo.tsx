import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";


const ProfileInfo = (props:any)=>{

    if (!props.profile){
       return  <Preloader/>
    }
    return (<div>
            {/*<div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7uvZVXCMc81WCvWcq6QToWwADT0cp_qzvg&usqp=CAU" alt=""/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div>
                <span> {props.profile.fullName}</span>
                <span> {props.profile.aboutMe}</span>

            </div>
        </div>
    )
}

export default ProfileInfo;