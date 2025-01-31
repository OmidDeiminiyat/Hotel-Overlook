import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from './singleHotel.module.scss';
import { IoIosArrowDropdown } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
export const SingleHotel = () => {

  const { country, city, rooms } = useParams();
  const [roomsDetail, setRoomsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(city);
  

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}/${city}/${rooms}`)
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

const struc = roomsDetail.cities[0].hotels[0].rooms;
console.log(struc);
const primary  = roomsDetail.cities[0].hotels[0].hotel_facilities;


function limitText(text, limit) {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}
  return (

    <>
 <main className={style.mainSection}>
 {struc && (

 
    <div className={style.hotelDetail}>  
  
      <article>
            <p>Hotel Overlook &gt; <Link to={`/Hotteler`}>Hoteller & Destinationer</Link> &gt; <Link to={`/Hotteler`}>{roomsDetail.name}</Link> &gt; {roomsDetail.cities[0].name} </p>
          <h3>{roomsDetail.cities[0].hotels[0].title}</h3>
          <p>{limitText(roomsDetail.cities[0].hotels[0].description, 90)}</p>
          <h3>Vores Værelser</h3>
      </article>

      <div className={style.myDiv}>
        {struc.map((item, index) => (
          <span>
      <section>
        <figure>
          <Link to={`/city/${roomsDetail.slug}/${roomsDetail.cities[0].slug}/${roomsDetail.cities[0].hotels[0].slug}/${item.slug}`}>
              <div key={index} >
                  <img src={`./../../../src/images/${item.slug}.jpg`} alt={`${item.title}`} />
              </div>
          </Link>
        </figure>
        <article>
          <h3>{item.title}</h3>
          <p>{item.area} ${item.slug} til ${item.num_persons}</p>
          <p>{item.description}</p>
          <h4>Fra {item.day_price_normal} DKK</h4>
          
        </article>
   </section>
      <Link to={`/city/${roomsDetail.slug}/${roomsDetail.cities[0].slug}/${roomsDetail.cities[0].hotels[0].slug}/${item.slug}`}>
      < IoIosArrowDropdown className={style.icone} />
      </Link>
   </span>
))}

</div>
</div>
)}
<section>
    <div>
        <h3>Information</h3>
        <span><MdLocationOn /> Sigthun 38 </span><br />
        <span><FaPhoneAlt /> 1122334455</span>
    </div>

    <div>
        <h3>Faciliterer</h3>
        <p>{primary[0].title}</p>
        <p>{primary[1].title}</p>
        <p>{primary[2].title}</p>
        <p>{primary[3].title}</p>
        <p>{primary[4].title}</p>
        <p>{primary[5].title}</p>
    </div>

    <div>
        <h3>Vores kunder mening</h3>
        <p>{primary[0].title}</p>
        <p>{primary[1].title}</p>
        <p>{primary[2].title}</p>
        <p>{primary[3].title}</p>
        <p>{primary[4].title}</p>
        <p>{primary[5].title}</p>
    </div>
</section>
</main>
</>
   
  );
}
