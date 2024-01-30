import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
const Home = () => {
  return (
    <div className=" w-screen min-h-screen flex flex-col items-center">
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>
  )
}

export default Home
