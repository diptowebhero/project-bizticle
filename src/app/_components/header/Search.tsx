import { SearchIcon } from 'lucide-react'

const Search = () => {
  return (
    <div className='h-[40px] w-full md:w-[245px]'>
      <div className='h-full'>
        <form action='#' className='flex h-full items-center justify-between overflow-hidden rounded-full border border-[#E5E7EB] bg-white dark:border-gray-800 dark:bg-transparent'>
          <div className="relative">
            <input
              type='text'
              className='size-full pl-9 outline-none dark:bg-transparent dark:text-white'
              placeholder='Search ...'
            />
            <SearchIcon size={18} className='absolute left-[10px] top-[3px] text-gray-500' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search