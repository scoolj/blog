import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='mt-[30px]'> 
      <h1 className='text-[96px] font-light max-xl:text-[72px] max-lg:text-[64px] max-md:text-[48px] max-sm:text-[36px]'>
      <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>

      <div className='mt-[60px] flex items-center gap-[50px]'>
        <div className='flex flex-1 h-[500px] relative max-lg:hidden'>
          <Image src="/p1.jpeg" alt='' fill className='object-cover ' />
        </div>
        <div className='flex flex-1 flex-col gap-5'>
          <h1 className='text-[40px] font-bold'> HI Lorem, ipsum dolor sit amet consectetur adipisicin</h1>
          <p className='text-[20px] font-light  text-softTextColor'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum fuga nostrum tenetur expedita necessitatibus nobis aliquid aut iure eius quisquam fugiat, quidem ut quod deserunt adipisci aliquam recusandae beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, laborum. Culpa temporibus quisquam neque, aliquid libero sint id, reiciendis corporis, recusandae doloremque maiores. .
          </p>

          <button className='px-5 py-4 outline-3 rounded-[5px] w-max bg-slate-300'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured