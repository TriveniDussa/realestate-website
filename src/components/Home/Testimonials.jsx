// import "../styles/Home.css";

function Testimonials() {
  return (
    <>
      <style>{`
        .testimonials{
          padding: 80px 10%;
          text-align: center;
          background: linear-gradient(135deg, #f5f7fa, #e4ecfb);
        }

        .testimonials h2{
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 40px;
        }

        .testimonial-card{
          max-width: 700px;
          margin: auto;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: 0.3s ease;
        }

        .testimonial-card:hover{
          transform: translateY(-8px);
        }

        .testimonial-card p{
          font-size: 1.2rem;
          color: #555;
          line-height: 1.8;
          font-style: italic;
        }

        .testimonial-card h4{
          margin-top: 20px;
          color: #6a11cb;
          font-size: 1.1rem;
        }

        @media(max-width:768px){
          .testimonials h2{
            font-size: 2rem;
          }

          .testimonial-card{
            padding: 25px;
          }
        }
      `}</style>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-card">
          <p>
            "Excellent service and amazing properties. The entire process
            was smooth and professional."
          </p>
          <h4>- Anu</h4>
        </div>
      </section>
    </>
  );
}

export default Testimonials;