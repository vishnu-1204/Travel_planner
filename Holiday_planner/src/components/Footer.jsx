import "./styles/footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Corporate Office */}
        <div className="footer-col">
          <h4>Corporate Office</h4>
          <div className="line"></div>
          <p>
            GT Holidays Pvt LTD,<br />
            Novel Tech Park,<br />
            Opposite to 1 MG Mall,<br />
            MG Road, Bangalore – 560042<br />
            Karnataka, India.
          </p>
        </div>

        {/* Head Office */}
        <div className="footer-col">
          <h4>Head Office</h4>
          <div className="line"></div>
          <p>
            GT Holidays Pvt LTD,<br />
            No.1, Gemini Parsn,<br />
            Kodambakkam High Road,<br />
            Nungambakkam, Chennai – 600006<br />
            Tamil Nadu, India.
          </p>
        </div>

        {/* Branches */}
        <div className="footer-col">
          <h4>Our Branches</h4>
          <div className="line"></div>
          <div className="branches">
            <ul>
              <li>Mumbai</li>
              <li>Hyderabad</li>
              <li>Bangalore</li>
              <li>Chennai</li>
              <li>Coimbatore</li>
              <li>Erode</li>
              <li>Madurai</li>
            </ul>
            <ul>
              <li>Trichy</li>
              <li>Salem</li>
              <li>Kochi</li>
              <li>Vellore</li>
              <li>Pondicherry</li>
              <li>Nagercoil</li>
              <li>Kanyakumari</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <div className="footer-box">
          <span>Call Us</span>
          <strong>+91 9940882200</strong>
        </div>

        <div className="footer-box">
          <span>Email Us</span>
          <strong>mail@gtholidays.in</strong>
        </div>

        <div className="footer-box">
          <span>Follow Us</span>
          <div className="social">
            <a href="#">f</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
                <FaXTwitter />
            </a>
            <a href="#">in</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
            <a href="#">G</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
