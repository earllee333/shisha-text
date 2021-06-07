import Head from 'next/head'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { createPopper } from '@popperjs/core';
import NavBar from '../component/Navbar'
export default function Home() {
const GA_TRACKING_ID ='G-R05RRVHFCQ'


return (
      <div className="home"> 
        <Head>
        <meta name="description" content = "下班後來點杯最符合你心境的調酒，搭配高規格的水煙，氣氛美燈光佳的酒吧，最適合閨蜜們的小聚，微醺之夜由1992 shisha陪你度過！"></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"/>
        
        </Head>                                
        <div className='home page'>
          <h1>1992 Shisha</h1>
          <NavBar/>
          <div className="home photo">
              <Image src='/1991shisha.jpeg' alt='酒吧'width={1100} height={1400}></Image>
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
       <script src='popcorn.js'>
       </script>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script>
     </div>
  )
}
