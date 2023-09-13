import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imagen1 from '../assets/PhotoReal_A_bustling_airport_cargo_terminal_where_workers_are_2.jpg';
import imagen2 from '../assets/PhotoReal_An_ecstatic_person_eyes_wide_with_surprise_and_delig_1.jpg';
import MapLines from './MapLines';

const Aboutus = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      id="sobrenosotros" 
      className="text-black p-4 md:p-8 relative font-poppins"
      ref={ref}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-left text-gray-800 border-b-2 border-black pb-2">WHAT IS ZOYLE?</h2>

      <div className="flex flex-col md:flex-row justify-between items-stretch space-y-8 md:space-y-0"> {/* Añadido space-y */}
        <motion.div 
          className="w-full md:w-1/3 mb-4 rounded relative flex flex-col bg-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.7, ease: "easeOut" }}
        >
          <img src={imagen1} alt="Imagen 1" className="w-full h-full object-cover rounded mb-4 border-2 border-black" />
          <p className="text-center text-justify bg-white bg-opacity-80 p-4 rounded shadow-lg border-2 border-black">
            We are a company dedicated to [your activity or mission]. With years of experience in the field,
            We strive to provide our customers with high-quality solutions and exceptional service.
          </p>
        </motion.div>

        <div className="hidden md:block w-1/12 mr-80">
          <MapLines />
        </div>

        <motion.div 
          className="w-full md:w-1/3 mb-4 rounded relative flex flex-col bg-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.7, ease: "easeOut" }}
        >
          <img src={imagen2} alt="Imagen 2" className="w-full h-full object-cover rounded mb-4 border-2 border-black" />
          <p className="text-center text-justify bg-white bg-opacity-80 p-4 rounded shadow-lg border-2 border-black">
            We are a company dedicated to [your activity or mission]. With years of experience in the field,
            We strive to provide our customers with high-quality solutions and exceptional service.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutus;
