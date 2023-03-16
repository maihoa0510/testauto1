import {getPost} from '../../../lib/post'

export default function Post({posts}) {

    return (<>
    
    {posts.map(post => (
        <li>{post.title}</li>
      ))}
    </>)

  }

  export const getStaticProps = async() =>{
    const posts = await getPost()
    // console.log(posts);
    return {
        props:{
            posts
        }
    }
  }