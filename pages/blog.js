import Layout from '../comps/MyLayout'
import Link from 'next/link'

const datas = [
  {title: 'Hello Next.js', id: 'Hello-nextjs'},
  {title: 'Learn Next.js is awesome"', id: 'learn-nextjs'}
]

const PostLink = ( props ) => (
  <li>
    <Link as = {`/sp/${props.id}`} href={`/staticpost?title=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id='hello-nextjs' title="hello Next.js" />
      <PostLink id='learn-nextjs' title="Learn Next.js is awesome" />
      <PostLink id='deploy-nextjs' title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)
export default blog