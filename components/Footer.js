import React from 'react'

export default function Footer() {
  return (
    <footer>
       <p className='text-center'>Copyright &copy;
        {
          new Date().getFullYear
        }
        Adanna Blessing 
       </p>
    </footer>
  )
}
