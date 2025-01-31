import React, { useEffect, useState } from 'react';
import style from './Værelse.module.scss';
import { Link } from "react-router-dom";

export const Værlser = () => {
    const [Rooms, setRooms] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city')
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setRooms(data); 
            setLoading(false); 
          })
          .catch((err) => {
            setError(err.message); 
            setLoading(false); 
          });
      }, []); 
      let roomStructur;
      if (Rooms?.cities?.[0]?.hotels?.[0]?.rooms) {
        roomStructur = Rooms.cities[0].hotels[0].rooms;
       
    }
    console.log(roomStructur);
   

  
      if (loading) return <p>Loading...</p>; 
      if (error) return <p>Error: {error}</p>; 
    //   let me limit title
      const limit = 30;
    return(
        <>
            <section className={style.section}>
                <h3>Se vores udvalg af værelser</h3>
                <div className={style.news}>
                    {roomStructur.slice(0, 3).map((item, index) => (
                              <Link to={`/city/danmark/kobenhavn/overlook-webers`}>
                            <figure key={index} >
                                <img src={`./../../../src/images/${item.room_id}.jpg`} alt={`${item.room_id}`} />
                                <figcaption>
                                    <h3>{item.title.length > limit 
                                        ? `${item.title.slice(0, limit)}...` 
                                        : item.title}</h3>
                                </figcaption>
                            </figure>
                        </Link>
))}
                </div>
            </section>
        </>
    )
}