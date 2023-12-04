import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
import { Link } from 'react-scroll';
import "../index.css";

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-10'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-24 backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-white/50'>
          <Link to='home'
           activeClass='active'
            spy={true}
            smooth={true}
           className='cursor-pointer w-16 h-16 flex items-center justify-center'>
            <BiHomeAlt/>
          </Link>
          <Link to='about'
           activeClass='active'
           spy={true}
           smooth={true}
           className='cursor-pointer w-16 h-16 flex items-center justify-center'>
            <BiUser/>
          </Link>
          <Link to='skills'
           activeClass='active'
           spy={true}
           smooth={true}
           className='cursor-pointer w-16 h-16 flex items-center justify-center'>
            <BsClipboardData/>
          </Link>
          <Link to='projects'
           activeClass='active'
           spy={true}
           smooth={true}
           className='cursor-pointer w-16 h-16 flex items-center justify-center'>
            <BsBriefcase/>
          </Link>
          <Link to='contact'
           activeClass='active'
           spy={true}
           smooth={true}
           className='cursor-pointer w-16 h-16 flex items-center justify-center'>
            <BsChatSquare/>
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
