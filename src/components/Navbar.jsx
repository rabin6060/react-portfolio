import {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

const links = [
    {
        id:1,
        link:'home'
    },
    {
        id:2,
        link:'about'
    },
    {
        id:3,
        link:'portfolio'
    },
    {
        id:4,
        link:'expierence'
    },
    {
        id:5,
        link:'contact'
    },
]



const Navbar = () => {
  const [show,setShow] = useState(false)

 
  return (
    <div className='flex items-center justify-between bg-[rgba(0,0,0,0.9)] px-4 text-white w-full h-20 fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Rabin</h1>
        </div>
        <ul className='hidden sm:flex'>
            {
                links.map(({id,link})=>(
                    <li key={id} className='px-4 capitalize font-medium text-slate-500 cursor-pointer hover:scale-110 duration-200'>{link}</li>
                ))
            }
        </ul>
        <div className='z-10 sm:hidden mr-3 cursor-pointer text-slate-500' onClick={()=>setShow(!show)}>
            {
                show ? <FaTimes size={30}/> : <FaBars size={30}/>
            }
        </div>
        {
            show && (
                    <ul className='w-full h-screen absolute top-0 left-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-slate-500'>
                        
                        {
                            links.map(({id,link})=>(
                                <li key={id} className='text-4xl capitalize py-4 cursor-pointer'>{link}</li>
                            ))
                        }
                    </ul>
                 )
        }
        
    </div>
  )
}

export default Navbar