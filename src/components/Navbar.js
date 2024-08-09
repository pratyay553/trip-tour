import React,{useState} from "react";
import { Menuitem } from "./Menuitem";
import "./Navstyle.css";
import { Link } from "react-router-dom";
 function Navbar () {
   const [isOn, setIsOn] = useState(false);

   const handleClick = () => {
     setIsOn(!isOn);
   };
    return (
      <div>
        <nav className="navbarItems">
          <h1 className="nav-logo" href="\">
            TRip-ToUr
          </h1>
          <div className="menu-icon" onClick={handleClick}>
            <i className={isOn ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul
            onClick={handleClick}
            className={isOn ? "nav-menu active" : "nav-menu"}
          >
            {Menuitem.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.className} href="/">
                    <i class={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <Link to='/Signup'>
            <button >
              Sign Up
              </button>
              </Link>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar;