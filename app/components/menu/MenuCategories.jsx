import React from 'react'
import Link from 'next/link'

const category =  'py-[10px] px-[25px] rounded-[10px] text-[14px]'
const MenuCategories = () => {
  return (
    <div className='mt-[35px] mb-[60px] flex flex-wrap gap-5'>
    <Link href="/blog?cat=style" className={`${category} bg-[#57c4ff31] `}>
      Style
    </Link>
    <Link href="/blog?cat=style" className={`${category} bg-[#da85c731]`}>
      Fashion
    </Link>
    <Link href="/blog?cat=style" className={`${category} bg-[#7fb88133]`}>
      Food
    </Link>
    <Link href="/blog?cat=style" className={`${category} bg-[#ff795736]`}>
      Travel
    </Link>
    <Link href="/blog?cat=style" className={`${category} bg-[#ffb04f45]`}>
      Culture
    </Link>
    <Link href="/blog?cat=style" className={`${category} bg-[#5e4fff31] `}>
      Coding
    </Link>
  </div>
  )
}

export default MenuCategories