import Head from'next/head'
import Image from 'next/image'
import Link from 'next/link'
const Under = () => {
    return ( 
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>

        </Head>


        <div className='bottom'>
        
            <div className='Logo'>
                <div><a>北屯店:台中市北屯區光明街32號</a>
                 <a href='https://goo.gl/maps/wJEzXdFit5tr3NXH6'><Image src='/google-maps-icon.png' width={30} height={20}></Image></a>
                </div>
                <div><a>南屯店:台中市南屯區嘿嘿街66號</a>
                 <a href='https://goo.gl/maps/wJEzXdFit5tr3NXH6'><Image src='/google-maps-icon.png' width={30} height={20}></Image></a>
                </div>
         
            </div>
            <div className='connection'>
                <a href='/'><Image id = 'fb-icon'src='/fb-icon.png' width={36} height={36}></Image></a>
                <a href='/'><Image src='/ig-icon.jpg' width={36} height={36}></Image></a>
                <a href='tel:+886-2-1234567'><Image src='/phone-icon.png' width={36} height={36}></Image></a>
                <p>Copyright&&Hung2021</p>
            </div>
        </div>
        </>
        
     
     );
}
 
export default Under;