import { useParams } from "react-router-dom";

function PropertyDetailsPage() {
  const { id } = useParams();

  const properties = [
    {
      id: 1,
      title: "Luxury Villa",
      location: "Hyderabad",
      price: "₹85 Lakhs",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
      description: "A beautiful luxury villa with modern amenities."
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Vijayawada",
      price: "₹55 Lakhs",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
      description: "Spacious apartment in the city center."
    },
    {
      id: 3,
      title: "Family House",
      location: "Guntur",
      price: "₹70 Lakhs",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600",
      description: "Perfect family home with garden and parking."
    }
  ];

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  return (
    <>
      <style>{`
        .details-container{
          max-width: 1100px;
          margin: 50px auto;
          padding: 20px;
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .details-image{
          width: 550px;
          height: 380px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .details-content{
          flex: 1;
        }

        .details-content h1{
          font-size: 42px;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        .details-content h3{
          color: #666;
          margin-bottom: 15px;
        }

        .details-content h2{
          color: #6a11cb;
          margin-bottom: 20px;
        }

        .details-content p{
          line-height: 1.8;
          color: #555;
          font-size: 18px;
        }

        .contact-btn{
          margin-top: 25px;
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg,#667eea,#764ba2);
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        @media(max-width:768px){
          .details-container{
            flex-direction: column;
          }

          .details-image{
            width: 100%;
            height: 250px;
          }

          .details-content h1{
            font-size: 30px;
          }
        }
      `}</style>

      <div className="details-container">
        <img
          src={property.image}
          alt={property.title}
          className="details-image"
        />

        <div className="details-content">
          <h1>{property.title}</h1>
          <h3>📍 {property.location}</h3>
          <h2>{property.price}</h2>
          <p>{property.description}</p>

          <button className="contact-btn">
            Contact Agent
          </button>
        </div>
      </div>
    </>
  );
}

export default PropertyDetailsPage;