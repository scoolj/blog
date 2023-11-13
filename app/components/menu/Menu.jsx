import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuPost from './MenuPost'
import MenuCategories from './MenuCategories'

const category = 'py-[3px] px-[8px] rounded-[10px] text-[12px] text-white w-max'

const Menu = () => {
  return (
    <div className='flex flex-[2] flex-col  mt-[60px] max-md:hidden'>
      <h2 className='text-gray-400 text-[16px] font-normal'>"What's hot"</h2>
      <h1 className='text-[28px]'>Most popular</h1>
      <MenuPost isWithImage={false} />

      <h2 className='text-gray-400 text-[16px] font-normal'>Discover by topic</h2>
      <h1 className='text-[28px]'>Categories</h1>
      <MenuCategories />


      <h2 className='text-gray-400 text-[16px] font-normal'>Chosen by the editor</h2>
      <h1 className='text-[28px]'>Editors Pick</h1>
      <MenuPost isWithImage={true} />
    </div>
  )
}

export default Menu