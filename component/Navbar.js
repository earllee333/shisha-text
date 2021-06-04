import * as FaIcons from 'react-icons/vsc';
import * as AiIcons from 'react-icons/ai';
import Link from 'next/link'
import Image from 'next/link'
import {useState,useEffect} from 'react'
import SidebarData from './SidebarData';
import {IconContext} from 'react-icons'
const NavBar = () => {
    const[showNav,setShowNav]=useState(false)
    
    console.log(SidebarData)
    return ( 
        <>
             <div className='navbar'>
                <a href='/' className='menu-bars'>
                    <FaIcons.VscThreeBars id='arrow' onClick={()=>{
                        setShowNav(!showNav)
                    }}/>
                </a>
            </div>
            <nav className={showNav ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items' onClick={()=>{
                    setShowNav(showNav)
                }}>
                    <li className='navbar-toggle'>
                        <a href='/'  className='menu-bars'>
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