import Head from 'next/head';
import Link from 'next/link';
function index() {
    return ( 
        <div> 
            <Head>
               <title> My Projects</title>
               <meta name='description' content='Generated by create next app'/>
               <link rel='icon' href='/favicon.ico'/>
            </Head>
          <h1>App collections</h1>
          <Link href='/google'>
            <h1>PROJECT ONE - GOOGLE</h1>
          </Link>
        </div>
    )
}

export default index;