import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const category = 'flex items-center  gap-[10px] capitalize w-[15%] h-[80px] py-1 my-5  rounded-[10px] justify-center max-xl:w-[20%] max-lg:w-[25%] max-md:w-[45%] max-sm:w-[100%] max-sm:my-1'
const image = 'rounded-[50%]' 

const getData = async() => {
  const res =  await fetch("http://localhost:3000/api/categories",{
    cache: "no-store",
  });


  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json();

};
 
const CategoryList = async() => {
  const  data = await getData();
  return (
    <div>
      <h1 className='my-[50px] font-extrabold text-3xl' >Popular Categories</h1>
      <div className='flex flex-wrap  justify-between  '>
        { data?.map((item) => (
          <Link href="/blog?cat=style" className={`${category}  ${"styles[item.slug]"}  bg-[#57c4ff31] `} key={item._id}>
          { item.img && 
          (<Image src={item.img}  alt=''  width={32} height={32} className={`${image}`} />)
          }
          {item.title}
        </Link>
          ))}
      </div>
    </div>
  )
}

export default CategoryList