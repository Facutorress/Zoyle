import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


function Contact() {
  const slideFromRight = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };
  const [inView, setInView] = useState(false);
  const formRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
  
    if (formRef.current) {
      observer.observe(formRef.current);
    }
  
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);
    
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('El nombre es obligatorio'),
      email: Yup.string()
        .email('Correo electrónico inválido')
        .required('El correo electrónico es obligatorio'),
      asunto: Yup.string()
        .required('El asunto es obligatorio'),
      mensaje: Yup.string()
        .required('El mensaje es obligatorio')
    }),
  });

  return (
    <div>
      <motion.section 
        className="bg-white p-8"
        ref={formRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideFromRight}
      >
      <h2 className="text-4xl font-bold mb-16 text-left text-gray-800 border-b-2 border-black pb-2">CONTACT US</h2>
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Name" 
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombre}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.nombre && formik.errors.nombre ? <div className="text-red-500 text-sm">{formik.errors.nombre}</div> : null}

        <input 
          type="email" 
          placeholder="Correo electrónico" 
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null}

        <input 
          type="text" 
          placeholder="Asunto" 
          name="asunto"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.asunto}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.asunto && formik.errors.asunto ? <div className="text-red-500 text-sm">{formik.errors.asunto}</div> : null}

        <textarea 
          placeholder="Mensaje" 
          name="mensaje"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mensaje}
          className="w-full p-2 border border-gray-300 rounded h-32"
        ></textarea>
        {formik.touched.mensaje && formik.errors.mensaje ? <div className="text-red-500 text-sm">{formik.errors.mensaje}</div> : null}

        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">Enviar</button>
      </form>

    </motion.section>
    </div>
  );
}

export default Contact;
