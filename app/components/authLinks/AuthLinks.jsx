"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, {useState} from 'react'

const Authlinks = () => {
  const [open, setOpen] = useState(false)

  const {status} = useSession();


  return (
    <>
    {
      status === "unauthenticated" ? (
        <Link href="/login" className='max-sm:hidden'>Login</Link> 
      ) : (
        <>
        <Link className='max-sm:hidden' href="/write">Write</Link>
        <span className='cursor-pointer max-sm:hidden' onClick={()=>signOut()}>Logout</span>
        </>
      )}
      <div className='w-5 h-4 flex flex-col justify-between cursor-pointer max-sm:flex max-2xl:hidden' onClick={()=>setOpen(!open)}>
      <div className='w-full h-[2px] bg-textColor' />
      <div className='w-full h-[2px] bg-textColor' />
      <div className='w-full h-[2px] bg-textColor' />
      </div>
      {
        open &&(
          <div className='absolute top-[100px] left-0 bg-bg h-[calc(100vh - 100px)] w-full flex  flex-col items-center gap-[50px] mt-3 pt-3 text-[36px]'>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            {
                status === "notauthenticated" ? (
                  <Link href="/login">Login</Link> 
                ) : (
                  <>
                  <Link href="/write">Write</Link>
                  <span className='pointer'>Logout</span>
                  </>
                )}
          </div>
          
        )
      }
    </>
  )
}

export default Authlinks