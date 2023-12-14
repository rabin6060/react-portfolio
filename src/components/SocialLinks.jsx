import React from 'react'
import { FaGithub ,FaLinkedin} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

const socialLinks = [
    {
        id:1,
        child:
            <>
            Linked In <FaLinkedin size={30}/>
            </> ,
        href:"https://linkedin.com",
        style: 'rounded-tr-lg' 
    },
    {
        id:2,
        child:
            <>
            GitHub <FaGithub size={30}/>
            </> ,
        href:"https://github.com/rabin6060",
       
    },
    {
        id:3,
        child:
            <>
            Mail <MdOutlineMail size={30}/>
            </> ,
        href:"mailto:rabin@gmail.com",
    },
    {
        id:4,
        child:
            <>
            Resume <BsFillPersonFill size={30}/>
            </> ,
        href:"/rabin-cv.pdf",
        style: 'rounded-br-lg' ,
        download:true
    },
]

const SocialLinks = () => {
    
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {
                socialLinks.map(link=>(
                    <li key={link.id} className={'w-40 h-14 bg-slate-500 flex items-center justify-between px-4 ml-[-100px] hover:rounded-lg hover:ml-[-10px] duration-200 '+link.style}>
                        <a href={link.href} className='w-full flex items-center justify-between text-white'
                            download={link.download}
                            target={'_blank'}
                            >
                        {
                            link.child
                        }
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialLinks