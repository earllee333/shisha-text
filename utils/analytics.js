import ReactGa from 'react-ga'

export const initGA=()=>{
    console.log('Ga init')
    ReactGa.initialize('UA-197811164-1')//G-R05RRVHFCQ
}
export const logPageView = () => {
    console.log(`Logging pageview for${window.location.pathname}`)
    ReactGa.set({page:window.location.pathname})
    ReactGa.pageview(window.location.pathname)
}
export const logEvent = (category="",action="")=>{
    if(category&&action){
        ReactGa.event({category,action})
    }
}
export const logException =(description="",fatal=false)=>{
    if(decription){
        ReactGa.exception({description,fatal})
    }
}