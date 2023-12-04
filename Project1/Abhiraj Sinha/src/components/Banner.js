import React from 'react';


import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'; 
import { fadeIn} from '../variants';

const Banner = () => {
  return <div className='section mt-12 lg:mt-0' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.4}} 
            className='text-2xl font-bold leading-[0.8] lg:text-[110px]'
            >
              Hi! I'm Abhiraj
            </motion.h1>
            <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.4}} 
            className='mb-6 text-4xl lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>
                I make: 
              </span>
              <TypeAnimation
                sequence={['Websites', 1500, 'Designs', 1500, 'Short films', 1500, 'Drawings', 1500, 'Things', 1500]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
              <motion.p 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
              >
                Currently a sophomore in IEEE, a content writer and graphic designer in the Literary Society, and tech team member in UNESQUO and EDC
                
              </motion.p>
              <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <a href="#contact" class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-5 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                  Contact me
                </a>
                <a href='#projects' className='text-gradient btn-link'>My Projects</a>
              </motion.div>

          </div>

          {/* Image */}
          <motion.div 
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          whileInView={'show'}
          className='flex flex-wrap flex-col justify-center items-center'>
            <div className='blob w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]'>
            </div>
          </motion.div>

        </div>
      </div>
    </div>;
};

export default Banner;
