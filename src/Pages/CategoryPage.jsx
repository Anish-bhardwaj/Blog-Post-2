import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {
    const navigation=useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className=' w-11/12 max-w-2xl   mt-[100px] flex flex-col  gap-y-6  mx-auto'>
            <div className='flex items-center gap-2 mb-[-100px]'>
                <button 
                className='border-2 rounded-md bg-white px-4 py-1 border-gray-300'
                onClick={()=>{navigation(-1)}}>Back</button>
                <h2 className='font-bold text-xl'>Blogs On</h2><span className='text-xl underline font-bold'>{category}</span>
            </div>
            <Blogs/>
        </div>
        <Pagination/>
    </div>    
   
  )
}

export default CategoryPage
