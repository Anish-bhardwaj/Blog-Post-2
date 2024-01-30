import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from '../context/AppContext'
import BlogDetails from './BlogDetails'
import { useLocation } from 'react-router-dom'


const Blogs = () => {
    const {posts,loading}=useContext(AppContext);
    console.log(posts);
    const location=useLocation();
    
  return (
    <div className={`w-11/12 max-w-2xl my-[100px] flex flex-col gap-y-10 items-center justify-center`}>
        {
            loading?(<Spinner/>):(
                posts.length===0?(
                    <div className=' text-3xl font-bold text-center'>No Post Found</div>
                ):
                (posts.map(  (post)=>(
                  <BlogDetails key={post.id} post={post}/>  
                    )))
                
            )
        }
    </div>
  )
}

export default Blogs
