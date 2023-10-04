import React from 'react';
import CountryCard from './CountryCard';
import SpainImage from '../assets/Flag_of_Spain-1024x683.png';
import FranceImage from '../assets/Flag_of_France-1024x683.png';
import GermanyImage from '../assets/Flag_of_Germany-1024x613.png';
import ItalyImage from '../assets/Flag_of_Italy-1024x683.png';
import USAImage from '../assets/Flag_of_United_States-1024x539.png';
import UKImage from '../assets/Flag_of_United_Kingdom-1024x512.png';
 

const Shop = () => {
  const countries = [
    { id: 1, name: "Spain", imageUrl: SpainImage, link: "https://www.amazon.es/" },
    { id: 2, name: "France", imageUrl: FranceImage, link: "https://www.amazon.fr/" },
    { id: 3, name: "Germany", imageUrl: GermanyImage, link: "https://www.amazon.de/" },
    { id: 4, name: "Italy", imageUrl: ItalyImage, link: "https://www.amazon.it/" },
    { id: 5, name: "United States", imageUrl: USAImage, link: "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=393493755082&hvpos=&hvnetw=g&hvrand=2989382716088453166&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1000037&hvtargid=kwd-10573980&hydadcr=2246_11061421" },
    { id: 6, name: "United Kingdom", imageUrl: UKImage, link: "https://www.amazon.co.uk/" },
];


  return (
    <div id="shop" className="p-8">
      <h1 className="text-2xl font-bold text-black mb-6">In wich countrys are we located?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map(country => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
