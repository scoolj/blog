"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Pagination = ({page, hasPrev, hasNext}) => {
  const router  = useRouter();

  return (
    <div className='flex justify-between'>
      <button className='w-[100px] border-hidden p-4 bg-[#DC143C] text-white cursor-pointer disabled:bg-[hsl(348,33%,32%)] disabled:cursor-not-allowed' disabled={!hasPrev} onClick={()=> router.push(`?page=${page - 1}`)}>Previous</button>
      <button className='w-[100px] border-hidden p-4 bg-[#DC143C] text-white cursor-pointer disabled:bg-[rgb(109,55,66)] disabled:cursor-not-allowed' disabled={!hasNext} onClick={()=> router.push(`?page=${page + 1}`)}>Next</button>
    </div>
  )
}

export default Pagination