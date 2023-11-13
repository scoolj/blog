import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const category = 'py-[3px] px-[8px] rounded-[10px] text-[12px] text-white w-max'

const MenuPost = ({isWithImage}) => {
  return (
    <div className='flex flex-col gap-[35px] mt-[35px] mb-[60px]'>
    <Link href='/' className='flex items-center gap-5 '> 
     {isWithImage && (  <div className='flex  flex-1 relative aspect-square ' >
        <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
      </div>
      )}
      <div className='flex flex-col flex-[4] gap-[5px]'>
        <span className={`${category} bg-[#ff7857] `}>Travel</span>
        <h3 className='text-[18px] font-medium text-softTextColor'>Lorem ipsum dolor sit amet consectetur adipisicing el</h3>
        <div className='text-[12px]'>
          <span>John Doe </span>
          <span className='text-gray-500'>10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className='flex items-center gap-5 '> 
     {isWithImage && (  <div className='flex  flex-1 relative aspect-square ' >
        <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
      </div>
      )}
      <div className='flex flex-col flex-[4] gap-[5px]'>
        <span className={`${category} bg-[#ffb14f] `}>Culture</span>
        <h3 className='text-[18px] font-medium text-softTextColor'>Lorem ipsum dolor sit amet consectetur adipisicing el</h3>
        <div className='text-[12px]'>
          <span>John Doe </span>
          <span className='text-gray-500'>10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className='flex items-center gap-5 '> 
     {isWithImage && (  <div className='flex  flex-1 relative aspect-square ' >
        <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
      </div>
      )}
      <div className='flex flex-col flex-[4] gap-[5px]'>
        <span className={`${category} bg-[#7fb881] `}>Food</span>
        <h3 className='text-[18px] font-medium text-softTextColor'>Lorem ipsum dolor sit amet consectetur adipisicing el</h3>
        <div className='text-[12px]'>
          <span>John Doe </span>
          <span className='text-gray-500'>10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className='flex items-center gap-5 '> 
     {isWithImage && (  <div className='flex  flex-1 relative aspect-square ' >
        <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
      </div>
      )}
      <div className='flex flex-col flex-[4] gap-[5px]'>
        <span className={`${category} bg-[#ff7887] `}>Fashion</span>
        <h3 className='text-[18px] font-medium text-softTextColor'>Lorem ipsum dolor sit amet consectetur adipisicing el</h3>
        <div className='text-[12px]'>
          <span>John Doe </span>
          <span className='text-gray-500'>10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className='flex items-center gap-5 '> 
     {isWithImage && (  <div className='flex  flex-1 relative aspect-square ' >
        <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
      </div>
      )}
      <div className='flex flex-col flex-[4] gap-[5px]'>
        <span className={`${category} bg-[#775aec] `}>Coding</span>
        <h3 className='text-[18px] font-medium text-softTextColor'>Lorem ipsum dolor sit amet consectetur adipisicing el</h3>
        <div className='text-[12px]'>
          <span>John Doe </span>
          <span className='text-gray-500'>10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className='flex items-center gap-5 '> 
     {isWithImage && (  <div className='flex  flex-1 relative aspect-square ' >
        <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
      </div>
      )}
      <div className='flex flex-col flex-[4] gap-[5px]'>
        <span className={`${category} bg-[#789cff] `}>Style</span>
        <h3 className='text-[18px] font-medium text-softTextColor'>Lorem ipsum dolor sit amet consectetur adipisicing el</h3>
        <div className='text-[12px]'>
          <span>John Doe </span>
          <span className='text-gray-500'>10.03.2023</span>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default MenuPost