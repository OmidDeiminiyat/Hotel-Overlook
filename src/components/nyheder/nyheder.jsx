import React, { useEffect, useState } from 'react';
import style from './Nyheder.module.scss';
import { Link } from "react-router-dom";

export const Nyheder = () => {
    const [news, setNews] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('http://localhost:4000/news')
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setNews(data); 
            setLoading(false); 
          })
          .catch((err) => {
            setError(err.message); 
            setLoading(false); 
          });
      }, []); 
  console.log(news);
  
      if (loading) return <p>Loading...</p>; 
      if (error) return <p>Error: {error}</p>; 
    //   let me limit title
      const limit = 30;
    return(
        <>
            <section className={style.section}>
                <h3>Sidste nyt</h3>
                <div className={style.news}>
                    {news.slice(0, 3).map((item, index) => (
                        <Link to={`/News/${item.id}`}>
                            <figure key={index} >
                                <img src={`./../../../src/images/${item.image.filename}`} alt={item.image.filename} />
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