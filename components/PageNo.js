import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function PageNo() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className='w-full mt-2 mb-2'>
    <div className='w-[90%] mx-auto'>
      <div className='w-[40%]  flex justify-between'>
          {
            startIndex > 10 && <Link href={`/google/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex - 10}`}>
            <h2 className='mb-8 bg-slate-600 text-sm text-white px-[15px] py-[4px] text-center rounded-md'>Previous</h2>
          </Link>
          }
          {
            startIndex < 90 && <Link href={`/google/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex + 10}`}>
            <h2 className='mb-8 bg-slate-600 text-sm text-white px-[15px] py-[4px] text-center rounded-md'>Next</h2>
          </Link>
          }
          
      </div>
    </div>
    </div>
  )
}
