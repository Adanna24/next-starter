import { useRouter } from 'next/router'
import React from 'react'
import Options from './Options'

export default function SearchOption() {
  const router = useRouter();
  return (
    <div className='w-full mt-[1rem] sticky top-[7%]'>
       <div className='w-[90%] m-auto p-[4px] flex space-x-8 select-none items-center text-gray-700'>
          <Options title='All' selected={router.query.searchType === "" || !router.query.searchType}/>
          <Options title='image' selected={router.query.searchType === "image"}/>
       </div>
    </div>
  )
}
