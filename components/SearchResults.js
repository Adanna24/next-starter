import Parser from 'html-react-parser'
export default function SearchResults({result}) {
  return (
    <div className="w-full mt-[1rem]">
       <div className="w-[90%] mx-auto flex items-center text-gray-400 text-sm mb-4">
          <p>About {result?.searchInformation?.formattedTotalResults} results ({result?.searchInformation?.formattedSearchTime} seconds)</p>
       </div>

       <div className="w-[90%] mx-auto mt-[1rem]">
          {
            result?.items?.map((r) =>(
              <div key={r.link} className='mb-[1.5rem] w-[50%]'>
                 <div className="">
                    <a href={r.link} className='text-sm truncate'>{r.formattedUrl}</a>
                    <a href={r.link}>
                      <h2 className='text-blue-600 hover:underline truncate text-lg font-medium decoration-blue-600'>{r.title}</h2>
                    </a>
                    <p className='text-sm mt-1 text-gray-600'>{Parser(r.htmlSnippet)}</p>
                 </div>
              </div>
            ))
          }
       </div>
    </div>
  )
}
