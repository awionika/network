import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends'
const NavBar = () => {
    return (
    <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink} > Profile </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs'activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news'activeClassName={s.activeLink}> News </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/setting'activeClassName={s.activeLink}>Setting </NavLink>
        </div>
        <div className={s.item}>
            <Friends/>
        </div>
    </nav>
)
}

export default NavBar;