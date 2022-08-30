import React from "react";
import { NavLink } from "react-router-dom";
import s from  './Nav.module.css'


const Nav = () => {
    return (<div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
                </div>
            </nav>

        </div>
    )
}

export default Nav;