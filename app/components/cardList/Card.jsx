import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({key, item}) => {
    console.log("Item>",item)
  return (
    <div className='mb-[50px]  flex items-center gap-[50px]' key={key}>
        { item.img && 
        <div className='flex  flex-1 h-[350px]  relative max-lg:hidden'>
            <Image src="/p1.jpeg" alt='' fill className='object-cover'/> 
        </div>
        }
        <div className='flex flex-1 flex-col gap-[30px]'>
            <div>
                <span className='text-gray-500'>{item.createdAt.substring(0,10)} - </span>
                <span className='text-[#DC143C] font-medium'>{item.catSlug}</span>
            </div>
            <Link href={`/posts/${item.slug}`}>
                <h1 className='font-bold text-2xl'>{item.title}</h1>
            </Link>
            <p className='text-lg font-light text-softTextColor'>
               {item.desc.substring(0, 60)}
            </p>
            <Link href={`/posts/${item.slug}`} className='border-b-[1px] border-solid border-[#DC143C] py-[2px] w-max'>Read More</Link>
        </div>
    </div>
  )
}

export default Card