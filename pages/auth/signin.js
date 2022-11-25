import React from 'react'
import Header from '../../components/Header'
import {getProviders, signIn} from 'next-auth/react'
import Link from 'next/link';

export default function signin({providers}) {
  return (
    <div className='w-[90%] m-auto p-2'>
      <Header />
      <div>

        {
          Object.values(providers).map(provider => (
            <div key={provider.name} className='flex align-center flex-col'>
              <img src='https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw' alt='google-logo' className='w-[50%] object-cover m-auto' />
              <p className='text-sm italic my-10 text-center'>This website is created for learning purpose</p>
              <button className='bg-blue-500 rounded-md text-white w-[180px] m-auto p-[4px] hover:brightness-105' onClick={() => signIn(provider.id, {callbackUrl: "/google"})}> Sign in with {provider.name} </button>
            </div>
          ))
        }
      </div>

      <Link href='/' className='w-auto inline-block text-3xl'>
          <p className='bg-blue-500 mt-8 w-auto inline-block rounded-sm text-white text-sm'>return</p>
      </Link>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers }
  }
}
