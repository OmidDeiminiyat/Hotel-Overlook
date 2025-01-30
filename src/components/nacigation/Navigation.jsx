import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import style from './Navigation.module.scss';
import { TfiLayoutLineSolid } from "react-icons/tfi";
import logo from './../../assets/hotel-overlook-logo.png';

export const Nav = () => {
    const location = useLocation();
    return(
        <>
        <nav className={style.nav}>
            <main>
                <figure>
                    <img src={logo} alt="Hotels logo" />
                </figure>
                <ul>
                    <li><Link to="/" style={{ color: location.pathname === '/' ? 'red' : 'white' }}>Forside</Link></li> <br />
                    <li><Link to="/Hotteler" style={{ color: location.pathname === '/Hotteler' ? 'red' : 'white' }}>Hotteler</Link></li> <br />
                    <li><Link to="/Reservation" style={{ color: location.pathname === '/Reservation' ? 'red' : 'white' }}>Reservation</Link></li><br />
                    <li><Link to="/Værlser" style={{ color: location.pathname === '/Værlser' ? 'red' : 'white' }}>Værlser</Link></li><br />
                    <li><Link to="/Login" style={{ color: location.pathname === '/Login' ? 'red' : 'white' }}>Login</Link></li>
                </ul>
            </main>
        </nav>
        </>
    )
}