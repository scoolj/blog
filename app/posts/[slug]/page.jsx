import Image from 'next/image'
import React from 'react'
import Menu from '../../components/menu/Menu'
import Comments from '../../components/comments/Comments'


const getData = async(slug) => {
    const res =  await fetch(`http://localhost:3000/api/posts/${slug} `,{
      cache: "no-store",
    });
  
  
    if(!res.ok){
      throw new Error("Failed");
    }
  
    return res.json();
  
  };
  

const SinglePage = async({params}) => {
    const {slug} = params;

    const data =  await getData(slug)

  return (
    <div>
        <div className='flex items-center gap-[50px]'>
            <div className='flex flex-1 flex-col'>
                <h1 className='text-[60px] mb-[50px] max-2xl:text-[54px] max-xl:text-[48px]  max-sm:text-[36px] '> {data?.title}</h1>
                <div className='flex items-center gap-[20px] '>                
                    {data?.user.image && (
                        <div className='w-[50px]  h-[50px] relative max-lg:hidden'>
                        <Image src={data.user.image} alt='' fill className='rounded-[50%] object-cover' />
                        </div>
                    )}

                    <div className='flex flex-col gap-[5px] text-softTextColor'>
                        <span className='text-[20px]  font-medium'>{data?.user.name}</span>
                        <span> {data.createdAt.substring(1,10)} </span>
                    </div>
                </div>
            </div>
            {data?.img && 
            <div className='flex flex-1 h-[350px] relative'>
                <Image  src={data.img} alt='' fill className='object-cover'/>
            </div>
            }
        </div>
        <div className='flex gap-[50px]'>
            <div  className='flex-[5] mt-[60px]'>
                    <div dangerouslySetInnerHTML={{__html: data?.desc}} />       
                    <div>
                        <Comments postSlug={slug}/>
                    </div>
                </div>
                <Menu />
        </div>
    </div>
  )
}

export default SinglePage