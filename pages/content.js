import {useEffect,useState} from 'react'

export default function Content(){
    const [data,setData]=useState()
    async function getData(){
        const res = await fetch('/api/getCustomers')
        const newData = await res.json()
        setData(newData)
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)
    return(
        <div>
            <h1>hihi</h1>
        </div>
    )
}