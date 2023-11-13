"use client"

import Image from 'next/image';
import Link from 'next/link';
import React , {useState}from 'react'
import useSWR from 'swr';
import {useSession} from "next-auth/react"


const fetcher =  async (url) => {
    const res = await fetch(url);
    
    const data =  await res.json();

    if(!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};



const Comments = ({postSlug}) => {
    const {status} = useSession();
    const {data, mutate, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

    const [desc, setDesc ]= useState("")


    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({desc, postSlug})
        });
        mutate();
    }
  return (
    <div className='mt-[50px]'>
        <h1 className='text-softTextColor mb-[30px]' >Comments</h1>
        {status === "authenticated" ? (
            <div className='flex items-center justify-between gap-[30px]'>
                <textarea placeholder='Write a comment...' className='p-5 w-full' onChange={(e) => setDesc(e.target.value)}/>
                <button  className='py-4 px-5  bg-teal-800 text-black font-bold border-hidden rounded-md cursor-pointer' onClick={handleSubmit}>Send</button>
            </div>
        ) : (
            <Link href="/login">Login to write a comment</Link>
        ) 
    }

    <div className='mt-[50px]'>
        { isLoading ? "loading" : data?.map((item) => (
            <div className='mb-[50px]' key={item._id}>
            <div className='flex items-center gap-5 mb-5 '>
                {item?.user?.image && <Image src={item.user.image} alt='' width={50} height={50} className='rounded-[50%] object-cover' /> }
                <div className='flex flex-col  gap-1 text-softTextColor'>
                    <span className='font-medium'>{item.user.name}</span>
                    <span className='text-[14px] '>{item.createdAt}</span>
                </div>
            </div>
            <p className='text-[18px] font-light'> {item.desc}</p>
        </div>
        ))}
    </div>

    </div>
  )
}

export default Comments