import React from 'react'
import{initGA,logPageView} from '../utils/analytics'
import Head from 'next/head'
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
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-R05RRVHFCQ"></script>
                <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R05RRVHFCQ',{page_path:window.location.pathname});
           `,
            }}
          />
                <title>台中1992 Shisha</title>
                </Head>
                {this.props.children}
            </div>
        </>
        )
    }
}