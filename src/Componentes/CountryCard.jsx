import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="border rounded p-4 hover:shadow-lg transition-shadow duration-300">
      <a href={country.link}>
      <img src={country.imageUrl} alt={country.name} className="w-11/12 h-48 object-contain mb-4 rounded mx-2 my-2" />


      </a>
      <h3 className="text-xl font-semibold">{country.name}</h3>
    </div>
  );
}

export default CountryCard;
