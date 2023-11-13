"use client"

import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@/app/context/ThemeContext'


const ThemeToggle = () => {

    const {theme, toggle} = useContext(ThemeContext)

    console.log(theme) 
  return (
    <div className={`w-10 h-4 rounded-2xl cursor-pointer  flex item-center justify-between relative ${theme === "dark" ? 'bg-white' : 'bg-[#0f172a] '}`} onClick={toggle}>
        <Image src="/moon.png" alt="toggle" width={14} height={14} />
        <div className={`w-4 h-4 rounded-full  absolute  ${theme === "dark" ? 'left-0 bg-[#0f172a]' : 'right-0 bg-white' } `} />
        <Image src="/sun.png" alt="toggle" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle