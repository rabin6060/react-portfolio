import React from 'react'
import MyPic from '../assets/me.png'
import { HiArrowRight } from "react-icons/hi2";

const Home = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center gap-5
                px-4 md:flex-row'>
            <div className='flex flex-col justify-center  text-center sm:text-left'>
                <h1 className='text-4xl sm:text-7xl text-white font-semibold '>Hi, I am a FullStack Developer</h1>
                <p className='text-slate-400 py-7 max-w-md'>
                    I have 8 years of experience building and desgining software.
                    Currently, I love to work on web application using technologies like
                    React, Tailwind, Next JS and GraphQL.
                </p>
                <div className='self-center sm:self-start'>
                    <button className='group text-xl text-white w-fit px-5 py-3 my-2 flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-200'><HiArrowRight size={25}/></span>
                    </button>
                </div>
            </div>
            <div className='w-2/3 md:w-full'>
                <img src={MyPic} alt="mypic" className='w-full object-cover rounded-lg' />
            </div>
        </div>
    </div>
  )
}

export default Home