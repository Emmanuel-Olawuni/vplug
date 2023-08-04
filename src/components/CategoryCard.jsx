import React from 'react'
import '../pages/home/home.css'
import { RiCamera2Line, RiComputerLine} from 'react-icons/ri'
import {} from 'react-icons/bs'


const CategoryCard = () => {

  return (
    <>
    <div className='flex flex-wrap gap-[10px] justify-center'>
    <div className="category-card  flex justify-center items-center cursor-pointer h-[100px] w-[100px] border-[#ddd4d4] border rounded-[7px] hover:bg-red-500 duration-200  ">
        <RiComputerLine className='caticon'  />
        
    </div>
    <div className="category-card  flex justify-center items-center cursor-pointer h-[100px] w-[100px] border-[#ddd4d4] border rounded-[7px] hover:bg-red-500 duration-200  ">
        <RiCamera2Line className='caticon'  />
        
    </div>
    <div className="category-card  flex justify-center items-center cursor-pointer h-[100px] w-[100px] border-[#ddd4d4] border rounded-[7px] hover:bg-red-500 duration-200  ">
        <RiComputerLine className='caticon'  />
        
    </div>
    <div className="category-card  flex justify-center items-center cursor-pointer h-[100px] w-[100px] border-[#ddd4d4] border rounded-[7px] hover:bg-red-500 duration-200  ">
        <RiComputerLine className='caticon'  />
        
    </div>
    <div className="category-card  flex justify-center items-center cursor-pointer h-[100px] w-[100px] border-[#ddd4d4] border rounded-[7px] hover:bg-red-500 duration-200  ">
        <RiComputerLine className='caticon'  />
        
    </div>
    </div>
    
    </>
  )
}

export default CategoryCard