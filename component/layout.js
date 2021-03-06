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
                <title>1992 Shisha | 台中水煙酒吧推薦，與閨蜜享受專屬的迷濛微醺之夜！</title>
                <meta name='viewport' content='width=device-width,initial-scale=1'></meta>
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