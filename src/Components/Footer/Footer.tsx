import "./Footer.css";
import { Link } from "react-router-dom";
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
              <i className="fa-brands fa-facebook fa-xl"></i>
            </Link>
          </div>
          <div className="icon">
            <Link to="/">
              <i className="fa-brands fa-x-twitter fa-xl"></i>
            </Link>
          </div>
          <div className="icon">
            <Link to="/">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </Link>
          </div>
          <div className="icon">
            <Link to="/">
              <i className="fa-brands fa-youtube fa-xl"></i>
            </Link>
          </div>
        </div>
        <text className=" cpy text-xs ">Copyright © 2024 Maidaan| All Rights Reserved</text>
      </div>
      <div className="useless"></div>
    </div>
  );
}
