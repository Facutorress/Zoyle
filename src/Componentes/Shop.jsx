import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Shop = () => {
  const products = [
    { id: 1, name: "Producto 1", imageUrl: "/path/to/image1.jpg" },
    { id: 2, name: "Producto 2", imageUrl: "/path/to/image2.jpg" },
    { id: 3, name: "Producto 3", imageUrl: "/path/to/image3.jpg" },{ id: 4, name: "Producto 4", imageUrl: "/path/to/image1.jpg" },
    { id: 5, name: "Producto 5", imageUrl: "/path/to/image2.jpg" },
    { id: 6, name: "Producto 6", imageUrl: "/path/to/image3.jpg" },{ id: 1, name: "Producto 1", imageUrl: "/path/to/image1.jpg" },
    { id: 2, name: "Producto 2", imageUrl: "/path/to/image2.jpg" },
    { id: 3, name: "Producto 3", imageUrl: "/path/to/image3.jpg" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // o cualquier otro número que desees

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div id="shop" className="p-8">
      <h2 className="text-2xl font-bold text-black mb-6">Nuestros Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-6">
        {[...Array(totalPages)].map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mr-2 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Shop;
