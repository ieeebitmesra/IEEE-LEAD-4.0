import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return <div className='section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:items-center h-screen'>
        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}} 
        class="square linkedin">
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
                <h2>
                    LinkedIn
                </h2>
                <p>This is where I network and build my professional portfolio</p>
                <a href="https://www.linkedin.com/in/abhiraj-sinha-240269249/" target="_blank">_adamdipinto</a>
            </div>
        </motion.div>

        <motion.div 
        variants={fadeIn('down', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}} 
        class="square twitter">
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
                <h2>
                    Twitter
                </h2>
                <p>This is where I catch up with tech and network with different social groups</p>
                <a href="https://twitter.com/_abhirajsinha_" target="_blank">@_abhirajsinha_</a>
            </div>
        </motion.div>

        <motion.div 
        variants={fadeIn('right', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}} 
        class="square github">
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
                <h2>
                    Github
                </h2>
                <p>This is where I share code and work on projects</p>
                <a href="https://github.com/AbhirajSinha179" target="_blank">AbhirajSinha179</a>
            </div>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Contact;
