import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import AppContextProvider, { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

export default function App() {
  const{fetchBlogPosts,posts}=useContext(AppContext);
  const[searchParams,setSearchParams]=useSearchParams();
  const location =useLocation();
  useEffect(()=>{
    const page=searchParams.get("page")??1;
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(parseInt(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(parseInt(page),null,category);
    }else{
      fetchBlogPosts(parseInt(page));
    }

  },[location.pathname,location.search]);
  
  return (

    

    <div className=" ">
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:blogId" element={<BlogPage/>}/>
        <Route path="/tags/:tag" element={<TagPage/>}/>
        <Route path="/categories/:category" element={<CategoryPage/>}/>
        <Route path="*" element={<div className="w-screen h-screen flex justify-center items-center text-3xl font-bold">Element does not exist</div>}/>
      </Routes>

    </div> 
  );
}
