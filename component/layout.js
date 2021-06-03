import React from 'react'
import{initGA,logPageView} from '../utils/analytics'
import Head from 'next/head'
import  Under  from './bottom.js'
export default class Layout extends React.Component{
    componentDidMount() {
        if(!window.GA_INITIALIZED){
            initGA()
            window.GA_INITIALIZED=true
        }
    logPageView()
    }
    render() {
        return(
        <>
            <div>
                <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-197811164-1"></script>
                <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-197811164-1',{page_path:window.location.pathname});
           `,
            }}
          />
            <script src='./script.js'></script>
                <title>台中酒吧水煙餐廳大推薦，來場網美必備的微醺之夜｜1992 Shisha</title>
                </Head>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5X6SGTV"
height={0}width={0}></iframe></noscript>
                {this.props.children}
                <Under/>

            </div>
        </>
        )
    }
}