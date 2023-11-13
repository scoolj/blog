import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex mt-[50px]  py-5 justify-between items-center max-md:flex-col max-md:gap-[50px] '>
      <div  className='flex flex-1 flex-col'>
        <div className='flex items-center gap-[10px]'>
          <Image src="/logo.png" alt='lama blog' width={50} height={50} />
          <h1 className='text-[24px] text-softTextColor'>Lamab log</h1>
        </div>
        <p className='font-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolores excepturi doloribus quidem, suscipit labore itaque temporibus quisquam. Repellat libero voluptate repellendus! Nisi dolorum ve</p>
      <div className='mt-[10px] flex gap-[10px]'>
      <Image src="/facebook.png" alt='' width={18} height={18} />
      <Image src="/instagram.png" alt='' width={18} height={18} />
      <Image src="/tiktok.png" alt='' width={18} height={18} />
      <Image src="/youtube.png" alt='' width={18} height={18} />
      </div>
      </div>
      <div className='flex flex-1  flex-row justify-end gap-[100px] max-lg:gap-[50px] max-md:w-full max-md:justify-between max-sm:text-[14px]'>
        <div className='flex flex-col gap-[10px] font-light'> 
          <span className='font-bold'>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer