import React from 'react'
import Head from 'next/head'
import SearchHeader from '../../components/searchHeader'
import SearchOption from '../../components/SearchOption'
import response from '../../response';
import SearchResults from '../../components/SearchResults';
import { useRouter } from 'next/router';
import PageNo from '../../components/PageNo';
import Imageresult from '../../components/Imageresult';

export default function Search({results}) {
  const router = useRouter();
    return (
    <div>
      <Head>
         <title>{router.query.term} search page</title>
      </Head>

      <SearchHeader/>
      <SearchOption />
      {
        router.query.searchType === 'image'? <Imageresult  result={results}/> : <SearchResults  result={results}/>
      }
      <PageNo />
    </div>
  )
}


export async function getServerSideProps(context){
  const startIndex = context.query.start || '1';
  const mockdata = true;
  const data = mockdata? response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && '&searchType=image'}&start=${startIndex}`)
  .then((response) => response.json())
  return {
    props:{
      results: data
    }
  }
}
