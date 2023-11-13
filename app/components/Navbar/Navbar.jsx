import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from '@/app/components/themeToggle/ThemeToggle'
import AuthLinks from '@/app/components/authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-20'>

      <div className='flex flex-1 gap-2 max-lg:hidden'>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className='flex flex-1 text-center max-xl:text-4xl text-3xl font-bold  max-lg:text-left max-md:text-2xl '>lamablog</div>
      <div className='flex flex-1 gap-4 text-xl items-center max-xl:text-lg:gap-3 max-sm:justify-end'>
        <ThemeToggle />
        <Link className='max-sm:hidden' href="/">Home</Link>
        <Link className='max-sm:hidden' href="/">Contact</Link>
        <Link  className='max-sm:hidden'href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar