import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from './../components/country/CountryList.module.scss';

export const SingleRooms = () => {

  const { country, city, rooms, roomDetail } = useParams();
  const [roomsDetail, setRoomsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(city);
  

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}/${city}/${rooms}/${roomDetail}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch city details");
        }
        return response.json();
      })
      .then((data) => setRoomsDetail(data))
      
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [country, city]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
console.log(roomsDetail);

const struc = roomsDetail.cities[0].hotels.hotel_facilities;
  return (

    <>
 
 {struc && (
   
    <div className={style.hotelDetail}>  
  
  <article>
        <p>Hotel Overlook &gt; <Link to={`/Hotteler`}>Hoteller & Destinationer</Link> &gt; <Link to={`/Hotteler`}>{roomsDetail.name}</Link> &gt; {roomsDetail.cities[0].name} </p>
      <h3>{roomsDetail.cities[0].hotels[0].title}</h3>
      <p>{roomsDetail.description}</p>
  </article>
<div className={style.myDiv}>
{struc.slice(0, 2).map((item, index) => (
   
    <figure>
    <Link to={`/city/${roomsDetail.slug}/${roomsDetail.cities[0].slug}/${item.slug}`}>
        <div key={index} >
            <img src={`./../../../src/images/${item.slug}`} alt={`${item.title}`} />
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
