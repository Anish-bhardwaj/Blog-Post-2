import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
    const [blog,setBlog]=useState(null);
    const[relatedblogs,setRelatedBlogs]=useState([]);
    const location=useLocation();
    const navigation=useNavigate();
    const {loading,setLoading}=useContext(AppContext);
    const blogId=location.pathname.split("/").at(-1);
    const newbaseUrl="https://codehelp-apis.vercel.app/api/";
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url=`${newbaseUrl}get-blog?blogId=${blogId}`;
        try{
            const response = await fetch(url);
            const data=await response.json();
            console.log(data);
            setBlog(data.blog);
            
            setRelatedBlogs(data.relatedBlogs);
            
        }catch(err){
            setRelatedBlogs([]);
            setBlog(null);
            toast.error("Problem in blog network");
            
        }
        setLoading(false);
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])
  return (
    <div>
        <Header/>
    <div className='w-11/12 max-w-2xl   mt-[100px] flex flex-col gap-y-7  mx-auto '>
        <div className=' '>
            <button
            className='border-2 rounded-md bg-white px-4 py-1 border-gray-300'
            onClick={()=>navigation(-1)}>Back</button>
            
        </div>
        {
            loading?(
                <div> <p>Loading</p></div>
            ):
            blog?(<div>
                <BlogDetails post={blog}/>
                <h2 className='mt-12 mb-8 font-bold text-3xl'>Related Blogs</h2>
                {
                    relatedblogs.map((post)=>(
                        <div key={post.id} className='my-4 gap-y-10'><BlogDetails post={post}/></div>
                    ))
                }
            </div>):(<div>No Blog Found</div>)
        }
    </div>
    </div>
  )
}

export default BlogPage
