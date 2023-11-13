import Featured from '@/app/components/features/Featured'
import CategoryList from '@/app/components/categoryList/CategoryList'
import CardList from '@/app/components/cardList/CardList'
import Menu from '@/app/components/menu/Menu'

export default function Home({searchParams}: any) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className='flex gap-[50px]'>
        <CardList  page={page}/>
        <Menu />
      </div>
    </div>
  )
}
