import React from 'react'
import hotel from '../assets/portfolio/hotel.jpg'

const portfolios = [
    {
        id:1,
        src:hotel
    },
    {
        id:2,
        src:hotel
    },
    {
        id:3,
        src:hotel
    },
    {
        id:4,
        src:hotel
    },
    {
        id:5,
        src:hotel
    },

    {
        id:6,
        src:hotel
    },

]

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen bg-for-components text-white'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2 className='text-4xl font-semibold border-b-4 inline border-slate-500'>Portfolio</h2>
                <p className='mt-3'>Check out some of my work right here.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0'>
                {
                    portfolios.map(({id,src})=>(
                        <div key={id} className='shadow-md shadow-gray-400 rounded-lg'>
                            <img src={src} alt="hotel" className='rounded-lg hover:scale-105 duration-200 overflow-hidden' />
                            <div className='flex items-center justify-center gap-2 py-2 px-2'>
                            <button className='w-1/2 px-4 py-2 hover:scale-105 duration-200 bg-[#f07167] rounded-lg'>Demo</button>
                            <button className='w-1/2 px-4 py-2 hover:scale-105 duration-200 bg-[#168aad] rounded-lg'>Code</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio