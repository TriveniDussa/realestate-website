import { Link } from "react-router-dom";
import { useState } from "react";
import smartplot from "../../assets/smartplot.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:15px 8%;
          background:#fff;
          box-shadow:0 2px 15px rgba(0,0,0,0.1);
          position:sticky;
          top:0;
          z-index:1000;
           height:65px;
        }

        .logo-container{
          display:flex;
          align-items:center;
          gap:10px;
          
        }

        .logo-img{
          width:80px;
          height:80px;
          object-fit:contain;
          
        }

        .logo{
          font-size:28px;
          font-weight:bold;
          color:#2c3e50;
          margin:0;
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
          transition:0.3s;
        }

        .nav-links a:hover{
          color:#667eea;
        }

        .menu-icon{
          display:none;
          font-size:30px;
          cursor:pointer;
        }

        /* Tablet */
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

          .logo-img{
            width:55px;
            height:55px;
          }

          .logo{
            font-size:22px;
          }
        }

        /* Mobile */
        @media(max-width:480px){

          .navbar{
            padding:12px 5%;
          }

          .logo-img{
            width:45px;
            height:45px;
          }

          .logo{
            font-size:18px;
          }

          .menu-icon{
            font-size:26px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo-container">
          <img
            src={smartplot}
            alt="Dream Homes Logo"
            className="logo-img"
          />
          <h2 className="logo">Dream Homes</h2>
        </div>

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