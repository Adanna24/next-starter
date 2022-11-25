import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

function User() {
  const {data: session} = useSession();
  if(session){
    return(
      <div className='flex w-auto space-x-4'>
          <img src={session.user.image} alt='profile-pix' className='w-[30px] rounded-full'/>
          <button onClick={signOut} classname='bg-blue-500 text-white px-2 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md'>Sign out</button>
      </div>
    )
  }
  return (
    <div>
       <button className='bg-blue-500 text-white px-1 py-1 font-medium rounded-md hover:brightness-105 hover:shadow-md' onClick={signIn}>Sign In</button>
    </div>
  )
}

export default User;