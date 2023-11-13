"use client"
import React from 'react'
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const {data, status} =  useSession()
    console.log(data, status)
     
    const router = useRouter();
    if(status === "loading"){
        return <div className=''>Loading...</div>
    }

    if(status === "authenticated"){
        router.push("/")
    }

    const btn = 'p-5 rounded-[5px]  border-hidden text-white font-bold cursor-pointer flex items-center justify-center first:bg-[#ff5555] even:bg-[#111] last:bg-[#087BEA] mb-10 max-sm:font-normal max-sm:text-[14px] '
  return (
    <div className='flex items-center justify-center mt-[60px] '> 
        <div className='bg-softBg py-[150px] px-[200px] flex-col gap-[50px] rounded-xl max-md:py-[50] max-md:px[70px] max-sm:p-[30px]'>
            <div className={btn} onClick={()=> signIn("google")}> Sign in with Google</div>
            <div className={btn} > Sign in with Github</div>
            <div className={btn}> Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage