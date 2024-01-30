import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page,pageChangeHandler, totalPages}=useContext(AppContext);
  return (
    <div className='w-screen border-t-2 py-2 fixed bottom-0 bg-white '>
      <div className='flex items-center w-11/12 max-w-2xl mx-auto'>
        {page>1&&
            (<button
                className='border-2 rounded-md px-4 py-1 mr-3 bg-white border-gray-300'
                onClick={()=> pageChangeHandler(parseInt(page)-1)}>Previous</button>)
        }
        {page<totalPages&&
            (<button 
                className='border-2 rounded-md bg-white px-4 py-1 border-gray-300'
                onClick={()=> pageChangeHandler(parseInt(page) +1)}>Next</button>)
        }
        <p className=' ml-auto font-bold text-sm'>
            Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
