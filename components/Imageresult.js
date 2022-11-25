import React from 'react'

export default function Imageresult({result}) {
  return (
    <div className='w-full mt-[1rem]'>
       <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
        {
          result?.items?.map((r) => (
            <div key={r?.link} className='mb-2'>

              
                <a href={r?.image?.contextLink}>
                   <img 
                    className='hover:shadow-xl w-full h-60 object-cover rounded-sm'
                     src={r?.link}
                     alt='image-results'
                   />
                </a>
                 <a href={r?.image?.contextLink}>
                    <h2 className='text-blue-600 hover:underline text-lg mt-4 truncate'>{r?.title}</h2>
                 </a>
                 <a href={r?.image?.contextLink}>
                    <p className='text-gray-600 text-sm mb-6'>{r?.displayLink}</p>
                 </a>
            </div>
          ))
        }
       </div>
    </div>
  )
}
