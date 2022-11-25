//import Head from 'next/head'
import Link from 'next/link';
import {
  SearchIcon,
  MicrophoneIcon
} from "@heroicons/react/solid";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useRef} from 'react'
import {useRouter} from 'next/router'

function Google () {

  const router = useRouter();
  const searchinput = useRef(null);

  function searchresult(event) {
    event.preventDefault();
    const term = searchinput.current.value
    if(!term.trim()) return
    router.push(`/google/search?term=4${term.trim()}&searchType=`)
  }
  async function randomSearch (e) {
    e.preventDefault();
    const random = await fetch('https://random-word-api.herokuapp.com/word?number=1').then((response) => response.json());
    if(!random) return;
    router.push(`/google/search?term=4${random}&searchType=`)
  }
  return (
    <div className='w-[100%] bg-white-50'>
      <div className='w-[90%] m-auto p-2'>
        <Header />
        <form className='flex flex-col items-center mt-30'>
           <div>
             <img 
               src = 'https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw'
               alt='google-logo'
               className='w-[80%] m-auto h-[300px] object-cover'
             />
           </div>

           <div className='flex p-3 hover:shadow-lg focus-within:shadow-lg m-auto w-[50%] border-2 rounded-full border-gray-200 shadow-gray-50 items-center'>
              <SearchIcon className='h-6 text-sm text-gray-400 m-auto'/>
              <input type='text' ref={searchinput} className='focus:outline-none w-[90%] m-auto' />
              <MicrophoneIcon className='h-6 text-sm text-gray-400 m-auto'/>
           </div>
           <div className='flex mt-6 m-auto items-center w-[50%] justify-center space-x-16'>
             <button className='bg-gray-200 w-auto rounded-md p-2 text-md hover:bg-slate-400 hover:shadow-sm cursor-pointer hover:text-white' onClick={searchresult}>Google Search</button>
             <button onClick={randomSearch} className='bg-gray-200 w-auto rounded-md p-2 text-md hover:bg-slate-400 hover:shadow-sm cursor-pointer hover:text-white'>i&apos;m feeling lucky</button>
           </div>
        </form>

        <div className='whitespace-nowrap p-6 text-sm text-gray-600 absolute bottom-0 left-[50%] translate-x-[-50%]'>
           <Footer/>
        </div>
        <Link href='/' className='w-auto inline-block text-3xl'>
          <p className='bg-blue-500 mt-8 w-auto inline-block rounded-sm text-white text-sm'>return</p>
       </Link>
       
      </div>
    </div>
  )
}

export default Google;