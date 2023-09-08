import React from 'react';
import Form from './Form';
import imagen1 from '../assets/PhotoReal_A_welcoming_and_vibrant_ecommerce_homepage_backdrop_1.jpg';
import imagen2 from '../assets/imagen2.jpg'
import imagen3 from '../assets/imagen3.jpg'
import imagen4 from '../assets/imagen4.jpg'
import Otro from './Mision';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Aboutus from './Aboutus';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="text-black min-h-screen font-sans">
      <section id="welcome" className="py-16 px-8 flex">
        <motion.div 
          className="w-3/5 pr-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 border-b-2 border-black pb-2 max-w-7xl mx-auto">WELCOME TO OUR PAGE</h1>
          <p className="text-lg text-justify-center font-poppins bg-white p-4 rounded shadow mt-4">In today's globalized world, shopping should know no borders. At Amazon International, we've curated a selection of the finest products from every corner of the globe, bringing them directly to your doorstep. Whether you're searching for unique handcrafted goods from remote villages or the latest tech gadgets from leading global brands, our platform ensures you have access to the world's best without ever leaving your home.</p>
        <p className="text-lg text-justify-center font-poppins bg-white p-4 pt-12 rounded shadow mt-4">
       Navigating the vast world of online shopping can be daunting, but with Amazon International, it's a breeze. Our intuitive interface, coupled with a robust search engine, filters, and customer reviews, ensures you find exactly what you're looking for every time. Navigating the vast world of online shopping can be daunting, but with Amazon International, it's a breeze. Our intuitive interface, coupled with a robust search engine, filters, and customer reviews, ensures you find exactly what you're looking for every time.   </p></motion.div>
        <div className="w-2/6 pl-6 pt-12  ml-16" style={{ height: '700px' }}>
    <Slider {...settings}>
        <div>
            <img src={imagen1} alt="Imagen 1" className="w-full h-full object-cover shadow-lg border-2 border-black" />
        </div>
        <div>
            <img src={imagen2} alt="Imagen 2" className="w-full h-full object-cover shadow-lg border-2 border-black" />
        </div>
        <div>
            <img src={imagen3} alt="Imagen 3" className="w-full h-full object-cover shadow-lg border-2 border-black" />
        </div>
        <div>
            <img src={imagen4} alt="Imagen 4" className="w-full h-full object-cover shadow-lg border-2 border-black" />
        </div>
    </Slider>
</div>

      </section>
      <section 
  id="aboutus" 
  className="py-40 px-8"
>
  <Aboutus />
</section>
<h2 className="text-4xl font-bold mb-16 text-center text-gray-800 border-b-2 border-black pb-2 max-w-7xl mx-auto">
  OUR MISSION
</h2>

<section className="py-6 px-8 bg-center bg-cover border-l border-r border-white">
  <Otro/>
</section>



      <section id="contact" className="py-20 px-8">
        <Form />
      </section>   
      <Footer/>
    </div>
  );
}

export default Home;
