import { useRouter } from 'next/router'
import React from 'react'

export default function Options({title, selected}) {
  const router = useRouter();
  function result (tit) {
     router.push(`/google/search?term=${router.query.term}&searchType=${tit === "image" ? "image":""}`)
  }
  return (
    <div onClick={() => result(title)}>
      <p className={`hover:text-blue-500 cursor-pointer hover:border-b-2 border-blue-500 ${selected && 'text-blue-500 border-b-2 border-blue-500'}`}>{title}</p>
    </div>
  )
}
