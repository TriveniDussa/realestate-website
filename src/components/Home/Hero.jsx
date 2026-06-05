// import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .hero{
          height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(135deg, #667eea, #764ba2, #6a11cb);
          color: white;
          padding: 20px;
        }

        .hero h1{
          font-size: 4rem;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .hero p{
          font-size: 1.4rem;
          margin-bottom: 30px;
        }

        .hero button{
          padding: 14px 32px;
          border: none;
          border-radius: 50px;
          background: white;
          color: #6a11cb;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .hero button:hover{
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px){
          .hero h1{
            font-size: 2.5rem;
          }

          .hero p{
            font-size: 1.1rem;
          }
        }
      `}</style>

      <section className="hero">
        <h1>Find Your Dream Home</h1>
        <p>Buy and Rent Properties Easily</p>

        <button onClick={() => navigate("/properties")}>
          Explore Properties
        </button>
      </section>
    </>
  );
}

export default Hero;