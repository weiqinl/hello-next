import Link from 'next/link'
import Layout from '../comps/MyLayout'
import {withRouter} from 'next/router'

const sp =  withRouter((props) => (
  <Layout>
    <h1>{ props.router.query.title }</h1>
    <div>
      THis is the blog static post content
    </div>
  </Layout>
))
// sp.getInitialProps = async function () {
//
// }
export default sp