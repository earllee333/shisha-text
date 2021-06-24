import {useState} from 'react'
import * as BsIcons from 'react-icons/bs'
import {FiChevronLeft} from 'react-icons/fa'
import Image from'next/image'
import{ImageData} from'./ImageData'

const SlidePho = () => {
    const[current,setCurrent]=useState(0);
    const length = ImageData.length

    const nextSlider = () => {
        setCurrent(current===length -1 ?0:current+1);
    }
    const preSlider=()=>{
        setCurrent(current===0?length -1:current-1)
    }
    if(!Array.isArray(ImageData) || ImageData.length <=0){
        return null
    }

    return ( 
        <section className='slider'>
            <BsIcons.BsChevronDoubleLeft onClick={preSlider} className='left-btn'/>
            {ImageData.map((slider,index)=>{
                return (
                    <div
                    className={index===current ?'slider active':'slider'}
                    key={index}
                    >
                        {index===current &&(
                            <Image src={slider.image} alt='1991shisha' width={800}height={900}></Image>
                        )}
                    </div>
                )
            })}
         <BsIcons.BsChevronDoubleRight onClick={nextSlider} className='right-btn'/>
        <style jsx>
            {`{
                }
            }`}
        </style>
        </section>
        
     );
}
 
export default SlidePho;