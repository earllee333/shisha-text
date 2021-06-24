import {createPopper} from '@popperjs/core'
import NavBar from '../component/Navbar';
import styles from '../styles/Home.module.css'



const booking = () => {
const unixTime = Math.floor(Date.now()/1000);
const currentTimestamp = Date.now()
new Date().getTime()
const notTime = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',
day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(currentTimestamp)
console.log(notTime)
    return ( 
        <div>
            <h1>hi</h1>
            {notTime && <div className='time'>{notTime}</div>}
            <NavBar/>

        <style jsx>
            {`{
            }`}
        </style>
        </div>
     );
}
 
export default booking;


