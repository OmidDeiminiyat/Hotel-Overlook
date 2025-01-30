import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import style from './Footer.module.scss';
export const Footer = () => {

    return(
        <>
            <footer className={style.footer}>
                <p> &#169; 2021 Hotel Overlook, Alle rettigheder forbeholdet  </p>

                <div>
                    < FaFacebook />
                    < FaTwitterSquare />
                </div>

                <ul>
                    <li>Forside</li>
                    <li>Hoteller & Destinationer</li>
                    <li>Værelser</li>
                    <li>Reservation</li>
                    <li>Login</li>
                </ul>
            </footer>
        </>
    )
}