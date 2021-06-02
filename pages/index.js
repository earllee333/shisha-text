import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { createPopper } from '@popperjs/core';
import Document from 'next/document'
export default function Home() {
const GA_TRACKING_ID ='G-R05RRVHFCQ'

const popcorn = Document.querySelector('#popcorn');
const tooltip = Document.querySelector('#tooltip');

createPopper(popcorn, tooltip, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
});

document.querySelector('#container').scrollTop = 520;

  return (
      <div className="home"> 
        <Head>
        <meta name="description" content = "下班後來酒吧點杯最符合你心境的調酒，搭配高規格的水煙，輕鬆把煙吐起來，氣氛美燈光佳的裝潢最適合閨蜜的小聚打卡點，還不約姐妹一起來，微醺之夜由1992 shisha陪你度過！" ></meta>

        </Head>                                
        <div className='home page'>
          <h1>1992 Shisha</h1>
            <div className="home photo">
              這放圖片
            </div>
            
            <div className='home content'> 
            <div className='container'>
              <div id='popcorn'aria-describedby='tooltip' ></div>
              <div id='tooltip' role='tooltip'>
                <div><Link href='/booking'><button>點我訂位</button></Link></div>
                <div id='arrow' data-popper-arrow></div>
              </div>
            </div>
            <p>草 是嚴選進口上等料</p>

            <p>酒 是網美與醉漢的合</p>
            </div>
        </div>
\      </div>
  )
}
