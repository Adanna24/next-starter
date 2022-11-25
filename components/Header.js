import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import User from './User';

function Header() {
   const router = useRouter();
  return (
     <header className='flex justify-between'>
        <div className='flex justify-between w-fit-content space-x-6'>
            <Link href='https://about.google/'>
              <p className='link'>About</p>
            </Link>
            <Link href='https://store.google.com/'>
              <p className='link'>Store</p>
            </Link>
           
        </div>
        <div className='flex justify-between w-fit-content space-x-6'>
            <Link href='https://mail.google.com/'>
              <p className='link'>Gmail</p>
            </Link>
             <p className='link' onClick={()=> router.push(`/google/search?term=${router.query.term || "google"}&searchType=image`)}>Images</p>
           <User />
        </div>
     </header>
  )
}

export default Header;