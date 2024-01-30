import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate} from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className=' w-11/12 max-w-2xl   mt-[100px] flex flex-col  gap-y-6  mx-auto'>
            <div  className='flex items-center gap-2 mb-[-100px]'>
                <button
                className='border-2 rounded-md bg-white px-4 py-1 border-gray-300'
                onClick={()=>{navigation(-1)}}>Back</button>
                <h2 className='font-bold text-xl'>Blogs Tagged</h2><span className='text-xl underline text-blue-700 font-bold'>#{tag}</span>
            </div>
        <Blogs/>
        </div>
        <Pagination/>
    </div>
  )
}

export default TagPage
