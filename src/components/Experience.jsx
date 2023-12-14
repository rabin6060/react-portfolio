import React from 'react'
import html from '../assets/html.png'
import reactImage from '../assets/react.png'
import css from '../assets/css.png'
import node from '../assets/node.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
const images = [
    {
        id:1,
        src:html,
        title:'HTML',
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-cyan-500'
    },
    {
        id:3,
        src:javascript,
        title:'JAVASCRIPT',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:reactImage,
        title:'REACT',
        style:'shadow-blue-500'
    },
    {
        id:5,
        src:node,
        title:'NODE',
        style:'shadow-green-500'
    },
    {
        id:6,
        src:github,
        title:'GITHUB',
        style:'shadow-slate-500'
    },
    {
        id:7,
        src:tailwind,
        title:'TAILWIND',
        style:'shadow-cyan-500'
    },
    {
        id:8,
        src:express,
        title:'EXPRESS JS',
        style:'shadow-cyan-500'
    },
    {
        id:9,
        src:mongo,
        title:'MONGO_DB',
        style:'shadow-green-500'
    }
]

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-for-components text-white'>
        <div className='max-w-screen-lg mx-auto w-full h-full flex flex-col justify-center'>
            <div className='text-center sm:text-left'>
                <h2 className='text-4xl font-semibold border-b-4 border-slate-500 inline p-2'>Experience</h2>
                <p className='py-8'>These are the technologies I have worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-6 px-12 sm:px-0'>
               {
                images.map(img=>(
                    <div key={img.id} className={'shadow-md shadow-slate-300 hover:scale-105 duration-200 rounded-lg '+img.style}>
                        <img src={img.src} alt='image' className='rounded-lg w-20 mx-auto '/>
                        <p>{img.title}</p>
                    </div>
                ))
               }
            </div>
        </div>
    </div>
  )
}

export default Experience