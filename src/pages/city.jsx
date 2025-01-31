import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from './../components/country/CountryList.module.scss';

export const City = () => {

  const { country, city } = useParams();
  const [cityDetails, setCityDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}/${city}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch city details");
        }
        return response.json();
      })
      .then((data) => setCityDetails(data))
      
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [country, city]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
console.log(cityDetails);

const struc = cityDetails.cities[0].hotels;
  return (

    <>
   
        {struc && (
        
        <div className={style.hotelDetail}>  
      
      <article>
            <p>Hotel Overlook &gt; <Link to={`/Hotteler`}>Hoteller & Destinationer</Link> &gt; <Link to={`/Hotteler`}>{cityDetails.name}</Link> &gt; {cityDetails.cities[0].name} </p>
          <h3>Vores hotteler i {cityDetails.name}</h3>
          <p>{cityDetails.description}</p>
      </article>
    <div className={style.myDiv}>
    {struc.slice(0, 6).map((item, index) => (
        <figure>
        <Link to={`/city/${cityDetails.slug}/${cityDetails.cities[0].slug}/${item.slug}`}>
            <div key={index} >
                <img src={`./../../../src/images/${item.HotelImage.hotel_image_filename}`} alt={`${item.HotelImage.hotel_image_filename}`} />
                <figcaption>
                    <h3>{item.title}</h3>
                </figcaption>
            </div>
        </Link>
        </figure>
))}
</div>

      
      
  </div>


)}

    </>
   
  );
}
