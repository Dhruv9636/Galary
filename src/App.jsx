import React, { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [data, setData] = useState([])
  const [num, setNum] = useState(1)

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${num}&limit=15`)
    const userData = await response.json()
    setData(userData)


    setData(userData)

    setLoading(false)

  }

  let allData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading Images...</h3>

  if (data.length > 0) {
    allData = data.map(function (elem, idx) {
      return <a href={elem.url} target='_blank' className='w-full sm:w-66 h-50 flex justify-center items-center' key={idx}>
        <img src={elem.download_url} alt="img" className='h-full w-full rounded-md hover:scale-110 hover:duration-200 duration-200 cursor-pointer' />
      </a>

    })
  }

  useEffect(() => {
    getData()
  }, [num])

  return (
    <div className='flex flex-wrap justify-center min-h-screen w-full items-center gap-5'>
      <h1 className='text-5xl font-bold text-center'>Galary</h1>
      <div className='flex flex-wrap justify-around gap-3 overflow-auto p-3'>{(
        allData
      )}</div>

      <div className='h-auto py-2 flex justify-center w-full items-center gap-2'>
        <button className='cursor-pointer text-white bg-blue-700 p-3 text-xl rounded-md active:scale-80 active:duration-200 duration-200' onClick={() => {
          if (num > 1) {
            setNum(num - 1)
            setData([])
          }
        }}>Previous</button>
        <h4>Page {num}</h4>
        <button className='cursor-pointer text-white bg-blue-700 p-3 text-xl rounded-md active:scale-80 active:duration-200 duration-200' onClick={() => {
          setNum(num + 1)
          setData([])
        }}>Next</button>
      </div>
    </div>
  );
}

export default App;
