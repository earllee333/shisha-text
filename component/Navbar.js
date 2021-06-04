import * as FaIcons from 'react-icons/vsc';
import * as AiIcons from 'react-icons/ai';
import Link from 'next/link'
import Image from 'next/link'
import {useState,useEffect} from 'react'
import SidebarData from './SidebarData';
import {IconContext} from 'react-icons'
const NavBar = () => {
    const[sidebar,setSidebar]=useState(false)
    const showSidebar = ()=>setSidebar(!sidebar)
    return ( 
        <>
             <div className='navbar'>
                <a href='#' className='menu-bars'>
                    <FaIcons.VscThreeBars id='arrow' onClick={showSidebar}/>
                </a>
            </div>
            <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <a href='#'  className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </a>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return( 
                            <li key={index} className={item.cName}>
                                <a href={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
             
                </ul>
            </nav>
      
        </>
           
);
}
 
export default NavBar;