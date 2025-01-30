import headImg from './../../images/frankfurt-skyline-germany.jpg';
import img3 from './../../images/overlook-grand-tromsoe.jpg'
import img2 from './../../images/operahus-oslo.jpg';
import style from  './Header.module.scss';
import React, { useState, useEffect } from 'react';


export const Header = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        headImg, // Make sure these paths are correct relative to your public folder or use imports
        img2,
        img3,
      ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Change image every 9 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);



    return(
        <>
            <section className={style.header}>
                <figure>
                    <img src={images[currentImageIndex]}  alt="frankfurt-skyline-germany" />
                    <span></span>
                    <figcaption><h3>Velkommen til hotel overlook online</h3></figcaption>
                    
                </figure>
            </section>
        </>
    )
}