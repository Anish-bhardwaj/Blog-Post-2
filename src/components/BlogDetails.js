import React from 'react'
import { NavLink } from 'react-router-dom'
const BlogDetails = ( {post}) => {
  return (
    <div>
      <div key={post.author}>
                        
                        <NavLink to={`/blog/${post.id}`} className=' font-bold text-lg hover:underline'>{post.title}</NavLink>
                        <p className=' text-sm'>By <span className='italic'>{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`} className=' underline font-bold cursor-pointer'>{post.category}</NavLink></p>
                        <p className='text-[14px]'>Posted on {post.date}</p>
                        <p className='text-md mt-3 mb-2 '>{post.content}</p>
                        <div className='flex gap-x-2 flex-wrap items-center'>
                            {post.tags.map((tag,index)=>{
                                return  <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index} className='text-xs font-semibold underline text-blue-700 cursor-pointer'>#{tag}</NavLink>
                            })}
                        </div>
                    </div>
               
    </div>
  )
}

export default BlogDetails
