import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  const GA_TRACKING_ID ='G-R05RRVHFCQ'
  return (
      <div className="home"> 
        <Head>
        <meta name="description" content = "【1992 Shisha】台中酒吧水煙餐廳大推薦，網美好拍熱點不私藏，來場網美必備的微醺之夜吧！" ></meta>

        </Head>                                
        <div className='home page'>
          <h1>1992 Shisha</h1>
            <div className="home photo">
              這放圖片
            </div>
            
            <div className='home content'> 
            <Link href='/booking'><button>點我訂位</button></Link>
            <p>草 是嚴選進口上等料</p>

            <p>酒 是網美與醉漢的合</p>
            </div>
        </div>
      </div>
  )
}
