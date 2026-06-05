import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:18px 8%;
          background:#fff;
          box-shadow:0 2px 15px rgba(0,0,0,0.1);
          position:sticky;
          top:0;
          z-index:1000;
        }

        .logo{
          font-size:28px;
          font-weight:bold;
          color:#2c3e50;
        }

        .nav-links{
          display:flex;
          list-style:none;
          gap:30px;
          margin:0;
          padding:0;
        }

        .nav-links a{
          text-decoration:none;
          color:#333;
          font-size:17px;
          font-weight:500;
        }

        .menu-icon{
          display:none;
          font-size:30px;
          cursor:pointer;
        }

        @media(max-width:768px){

          .menu-icon{
            display:block;
          }

          .nav-links{
            position:absolute;
            top:75px;
            left:0;
            width:100%;
            background:white;
            flex-direction:column;
            text-align:center;
            gap:20px;
            padding:20px 0;
            display:none;
            box-shadow:0 5px 15px rgba(0,0,0,0.1);
          }

          .nav-links.active{
            display:flex;
          }

          .logo{
            font-size:24px;
          }
        }
      `}</style>

      <nav className="navbar">
        <h2 className="logo">Dream Homes</h2>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/properties" onClick={() => setMenuOpen(false)}>
              Properties
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;