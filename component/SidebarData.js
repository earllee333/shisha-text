import * as GiIcons from 'react-icons/gi';
import * as Iocons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Menu',
        path:'/',
        icon:<GiIcons.GiKnifeFork />,
        cName:'nav-text'
    },
    {
        title:'Order',
        path:'https://botton-copy.vercel.app',
        icon:<GiIcons.GiSofa />,
        cName:'nav-text'
    },
]
module.exports=SidebarData;