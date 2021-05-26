import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head >
        <title>台中1992 Shisha</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R05RRVHFCQ"></script>
      <script src='./script.js'></script>
      </Head>                                       
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
    </>
  )
}
