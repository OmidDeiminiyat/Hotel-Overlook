import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './CountryList.module.scss';
import { DiJava } from 'react-icons/di';

export const Countries = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [destination, setDestination] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('http://localhost:4000/destinations')
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setDestination(data); 
            setLoading(false); 
          })
          .catch((err) => {
            setError(err.message); 
            setLoading(false); 
          });
      }, []); 

   
      const fetchCountryDetails = (slug) => {
        setLoading(true);
        setError("");
    
        fetch(`http://localhost:4000/destinations/${slug}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch country details");
            }
            return response.json();
          })
          .then((data) => setSelectedCountry(data))
          .catch((error) => setError(error.message))
          .finally(() => setLoading(false));
      };
    
      console.log(destination);
      console.log(selectedCountry);
      
    return(
        <>
            <section className={style.countryNav}>

                <ul>
                {destination.map((item, index) => (
                   <li key={item.id} onClick={() => fetchCountryDetails(item.slug)}>{item.name}</li>                                                
        ))}
                </ul>
            </section>
            {selectedCountry && (
                  
                  <div className={style.hotelDetail}>  
                      
                      <article>
                            <p>Hotel Overlook &gt; Hoteller & Destinationer &gt; {selectedCountry.name} </p>
                          <h3>Vores hotteler i {selectedCountry.name}</h3>
                          <p>{selectedCountry.description}</p>
                      </article>
                      <div className={style.myDiv}>
                    
                    {selectedCountry.cities.slice(0, 2).map((item, index) => (
                        <figure>
                            <Link to={`/city/${selectedCountry.slug}/${item.slug}`}>
                                <div key={index} >
                                    <img src={`./../../../src/images/${item.CityImage.city_image_filename}`} alt={item} />
                                    <figcaption>
                                        <h3>{item.name}</h3>
                                    </figcaption>
                                </div>
                            </Link>
                        </figure>
))}     
                </div>
                
                      
                      
                  </div>
  
  
  
          
        )}
        </>
    )
}