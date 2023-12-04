import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  return <div id='about' className='section my-8'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}} 
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        <motion.div 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}} 
        className='flex-1 max-w-5xl'>
          <h2 className='h2 text-accent'>
            About me
          </h2>
          <h3 className='h3 mb-4'>I'm a B.Tech student, hoping to become a Full-Stack Developer </h3>
          <p className='mb-6'>
          Hailing from Mumbai, I've always been an inquisitor for the world's curiosities.
          <br/> <br/>
          Also an EDC Hackathon winner alongside my friends, I have grown an interest in technology which  has compelled me to explore WebD, IoT, ML, and Cybersecurity. 
          <br/> <br/>
          On the miscellaneous end, I've also worked as a content writer at Anonymous Squirrels, taken part in a couple MUNs (got a runner-up in one), and love to Monkeytype. 
          </p>
        </motion.div>
      </div>

    </div>
  </div>;
};

export default About;
