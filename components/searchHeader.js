import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import {
  SearchIcon,
  MicrophoneIcon,
  XIcon
} from "@heroicons/react/solid";
import User from './User';


export default function SearchHeader() {
  const router = useRouter();
  const searchinput = useRef();
  
  function newsearch(event) {
       event.preventDefault();
       const term = searchinput.current.value;

       if(!term.trim()) return;

       router.push(`/google/search?term=${term.trim()}&searchType=`);
  }
  return (
    <header className='w-full sticky top-0 bg-slate-50'>
       <div className='w-[90%] m-auto px-2 py-4 flex items-center justify-between'>
          <div className='cursor-pointer'>
             <img
                onClick={() => router.push("/google")}
                src = 'https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png'
                alt='google-logo'
                className='w-[40px] h-[40px] m-auto object-contain'
              ></img>
          </div>
          <form className='flex bg-white shadow-md w-[50%] p-[8px] rounded-full items-center justify-between border-gray-50 border-2'>
               <input  type="text" defaultValue={router.query.term} ref={searchinput} className="w-[60%] outline-none focus-within:outline-none"/> 
               <div className='flex space-x-3'>
                  <XIcon className='h-5 text-gray-400 border-r-2' onClick={() => searchinput.current.value = ""}/>
                  <SearchIcon className='h-5 text-blue-400 cursor-pointer' /> 
                  <MicrophoneIcon className='h-5 text-blue-400 cursor-pointer'/>
              </div> 
              <button type='submit' hidden onClick={newsearch}>
              </button>
          </form>
          <div>
             <User />
          </div>
       </div>
    </header>
  )
}
