import {getPostIds} from '../../../lib/post'

export default function Post({posts}) {

    return (<>
    
    {posts.map(post => (
        <li>{post.title}</li>
      ))}
    </>)

  }

  export async function getStaticPaths() {
    const paths = await getPostIds()
    console.log(paths);
    return {
        paths, 
        fallback: false
    }
  }