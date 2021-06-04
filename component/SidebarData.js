import * as GiIcons from 'react-icons/Gi';
import * as Iocons from 'react-icons/Io';
import * as AIcons from 'react-icons/Ai';

const SidebarData = [
    {
        title:'home',
        path:'/',
        icon:<AIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'menu',
        path:'/',
        icon:<GiIcons.GiKnifeFork />,
        cName:'nav-text'
    },
    {
        title:'order',
        path:'/',
        icon:<GiIcons.GiSofa />,
        cName:'nav-text'
    },
]
module.exports=SidebarData;