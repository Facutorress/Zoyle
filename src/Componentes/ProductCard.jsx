import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-black p-4 rounded-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
      <a href={`/product/${product.id}`} className="text-black hover:text-gray-600 transition duration-300">{product.name}</a>
    </div>
  );
}

export default ProductCard;
