import React from 'react';
import CountryCard from './CountryCard';

const Shop = () => {
  const countries = [
    { id: 1, name: "Spain", imageUrl: "/path/to/image1.jpg", link: "/link1" },
    { id: 2, name: "France", imageUrl: "/path/to/image2.jpg", link: "/link2" },
    { id: 3, name: "Germany", imageUrl: "/path/to/image3.jpg", link: "/link3" },
    { id: 4, name: "Italy", imageUrl: "/path/to/image4.jpg", link: "/link4" },
    { id: 5, name: "United States", imageUrl: "/path/to/image5.jpg", link: "/link5" },
    { id: 6, name: "United Kingdom", imageUrl: "/path/to/image6.jpg", link: "/link6" },
];

  return (
    <div id="shop" className="p-8">
      <h2 className="text-2xl font-bold text-black mb-6">Nuestros Países</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map(country => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
