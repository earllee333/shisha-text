import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../component/layout'
import NavBar from '../component/Navbar'
function MyApp({ Component, pageProps }) {
  return <Layout>
      <Component {...pageProps} />
      </Layout>
}

export default MyApp
