import React from 'react';
import s from './NavBar.module.css';
console.log(s);

/*let s {
    'nav': "NavBar_nav__2Ih6C"
    'item':"NavBar_item__HRqem" 
 }
 */
const NavBar = () => {
 return <nav className= {s.nav}>
 <div className={s.item}>
     <a> Profile </a>
     </div>
 <div className= {`${s.item} ${s.active}`}> 
 <a>Messages</a>
  </div>
 <div className={s.item}>
     <a> News </a>
      </div>
 <div className={s.item}>
     <a>Setting </a>
     </div>

</nav>
      
}

export default NavBar;