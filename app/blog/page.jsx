import React from 'react'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'

const BlogPage = ({searchParams}) => {
  const page =  parent(searchParams.page) || 1;
  const {cat} = searchParams;

  return (
    <div className=''>
        <h1 className='bg-[#FF7F50] text-white py-[5px] px-[10px] text-center capitalize'>{cat} Blog</h1>
        <div className='flex gap-[50px]'>
            <CardList page={page} cat={cat} />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage