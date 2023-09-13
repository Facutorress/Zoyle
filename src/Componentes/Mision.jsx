import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import fondo from '../assets/PhotoReal_An_ultramodern_office_space_situated_in_a_highrise_b_3.jpg';
import isologo from '../assets/Zoyle ISO LOGO.png';

const Mision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
      className="flex justify-center items-center h-[80vh] md:h-[90vh] relative bg-center bg-cover border-2 border-black md:ml-12 bg-no-repeat"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full w-24 md:w-32 h-24 md:h-32" style={{ top: '33%' }}>
        <img src={isologo} alt="Isologo" className="w-full h-full" />
      </div>
      <motion.div 
        ref={ref}
        className="bg-white bg-opacity-50 p-4 md:p-8 rounded-md max-w-xl md:max-w-3xl mx-4 md:mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.7}}
      >
        <p className="text-3xl md:text-4xl font-bold font-poppins text-center">
          " Shop the World, Delivered to Your Door."
        </p>
      </motion.div>
    </div>
  );
}

export default Mision;
