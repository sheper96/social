import React from "react";
import s from  './Header.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../Redux/auth-reducer";


const Header = (props:any)=>{
    return (<div className={s.header}>
            <img src="https://www.logodesign.net/logo/leaves-with-water-drops-2166ld.png?size=2&industry=nature" alt=""/>
            <div className={s.loginBlock}>
                {props.auth.isAuth ? <div>{props.auth.login} - <button onClick={props.logout}>Logout</button> </div>: <NavLink to={'/login'} >Login</NavLink>  }
            </div>
            <div>
                <span>
                    {props.auth.userId}
                </span>
            </div>
        </div>
)
}



export default Header;