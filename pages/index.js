import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'

export default function Home() {
  return (
    <div className='home page'>
      <h1>1992 Shisha</h1>
        <div className="home photo">
          這邊我要放圖片
        </div>
        
        
        <div className='home content'> 
        <p>草 是嚴選進口上等料</p>
        <p>酒 是網美與醉漢的合</p>
        </div>
    </div>
  )
}
