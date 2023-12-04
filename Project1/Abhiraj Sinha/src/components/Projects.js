import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Projects = () => {
  return <section id='projects' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10 '>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}  
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '
        >
          
          <div>
            <h2 className='h2 leading-tight text-accent'>Projects</h2>
            <p className='max-w-md mb-4'>Throughout the past few months, I've immersed myself in different tech stacks and explored VanillaJS, React, Angular, NextJS, Flask and TailwindCSS.
            I have worked on these projects alongside my teammates, who've been an irreplacable part of my journey.
            </p>
          </div>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''></img>

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
              <span className='text-gradient'>
                Frontend Design
              </span>
              </div>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-500 z-50'>
              <span className='text-3xl text-white'>Portfolio Website</span>
            </div>
          </div>

        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}} 
          className='flex-1 flex flex-col gap-y-10'
        >
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''></img>

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
              <span className='text-gradient'>
                BlockChain
              </span>
              </div>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-500 z-50'>
              <span className='text-3xl text-white'>NyayNidhi Evault</span>
            </div>
          </div>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''></img>

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
              <span className='text-gradient'>
                FullStack
              </span>
              </div>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-500 z-50'>
              <span className='text-3xl text-white'>Text2Maatra</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Projects;
