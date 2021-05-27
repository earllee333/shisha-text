

import {useEffect,useState} from 'react'

const mario = () => {
    const [data,setData]=useState(null)
   
    async function getData(){
        const res = await fetch('/api/getMario')
        const Newdata = await res.json()
        setData(Newdata)
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)
    console.log('get data')

    return ( 
        <div>
            <h1>Mario</h1>
            {data&& <div>{data.name}</div>}
        </div>
     );
}
 
export default mario;