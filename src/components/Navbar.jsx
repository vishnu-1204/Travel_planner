import './styles/Navbar.css'
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navbar(){

   const navigate = useNavigate(null)
    return (
         <nav className="navbar">
            <div className="logo">GT Holidays</div>

            <ul className="nav-links">
                <li>Home</li>
                <li> 
                    packages
                </li>
                <li>Destinations</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

           <button
                className="book-btn"
                onClick={() => navigate("/login")}
            >
                Book Now
            </button>
        </nav>
    )
}

export default Navbar;

