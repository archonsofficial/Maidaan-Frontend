import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Import React Icons
import Logo from "../../assets/Logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="ft1">
        <img className="logo" src={Logo} alt="" />
        <div className="linkpart">
          <Link to="/" className="link1">
            Get Involved
          </Link>
          <Link to="/">Organize a Tournament</Link>
          <Link to="/">Explore Sports Events</Link>
        </div>
      </div>

      <div className="ft2">
        <Link to="/" className="link1 text-sm">
          Follow us:
        </Link>
        <div className="iconlink">
          <div className="icon">
            <Link to="/">
              <FaFacebook className="fa-xl" />
            </Link>
          </div>
          <div className="icon">
            <Link to="/">
              <FaTwitter className="fa-xl" />
            </Link>
          </div>
          <div className="icon">
            <Link to="/">
              <FaInstagram className="fa-xl" />
            </Link>
          </div>
          <div className="icon">
            <Link to="/">
              <FaYoutube className="fa-xl" />
            </Link>
          </div>
        </div>
        <p className="cpy text-xs">Copyright © 2024 Maidaan | All Rights Reserved</p>
      </div>

      <div className="useless"></div>
    </div>
  );
}
