import { useState } from "react";

function Services() {
  const [message, setMessage] = useState("");

  return (
    <>
      <style>{`
        .services{
          padding: 80px 10%;
          text-align: center;
          background: #f8f9fa;
        }

        .services h2{
          font-size: 2.5rem;
          margin-bottom: 40px;
        }

        .service-container{
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .card{
          width: 280px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 40px 20px;
          border-radius: 20px;
          cursor: pointer;
          transition: 0.3s;
        }

        .card:hover{
          transform: translateY(-10px);
        }

        .info-box{
          max-width: 700px;
          margin: 40px auto 0;
          padding: 20px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          font-size: 18px;
          line-height: 1.7;
        }
      `}</style>

      <section className="services">
        <h2>Our Services</h2>

        <div className="service-container">
          <div
            className="card"
            onClick={() =>
              setMessage(
                " We help customers find and purchase their dream homes with verified listings, legal assistance, and affordable pricing."
              )
            }
          >
            <h3> Buy Property</h3>
          </div>

          <div
            className="card"
            onClick={() =>
              setMessage(
                " Explore rental apartments, villas, and commercial spaces in prime locations at competitive prices."
              )
            }
          >
            <h3> Rent Property</h3>
          </div>

          <div
            className="card"
            onClick={() =>
              setMessage(
                " Get expert guidance on real estate investments and discover high-return property opportunities."
              )
            }
          >
            <h3> Investment</h3>
          </div>
        </div>

        {message && (
          <div className="info-box">
            <p>{message}</p>
          </div>
        )}
      </section>
    </>
  );
}

export default Services;