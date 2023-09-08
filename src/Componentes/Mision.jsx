import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import fondo from '../assets/PhotoReal_An_ultramodern_office_space_situated_in_a_highrise_b_3.jpg'
import isologo from '../assets/Zoyle ISO LOGO.png'

const Mision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
      className="flex justify-center items-center h-full relative bg-center bg-cover border-2 border-black ml-12"
      style={{ backgroundImage: `url(${fondo})`, height: '670px', width: '1200px' }}
    >
       <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"> {/* Ajusta las dimensiones y la posición según lo que necesites */}
        <img src={isologo} alt="Isologo"  />
      </div>
      <motion.div 
        ref={ref}
        className="bg-white bg-opacity-50 p-8 rounded-md max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.7}}
      >
        <p className="text-4xl font-bold font-poppins text-center">
          " Shop the World, Delivered to Your Door."
        </p>
      </motion.div>
    </div>
  );
}

export default Mision;
