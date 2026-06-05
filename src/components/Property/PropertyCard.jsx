import { Link } from "react-router-dom";

function PropertyCard({ id, image, title, location, price }) {
  return (
    <>
      <style>{`
        .property-card {
          width: 300px;
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          transition: 0.3s ease;
        }

        .property-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }

        .property-card img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          transition: 0.4s ease;
        }

        .property-card:hover img {
          transform: scale(1.05);
        }

        .property-card h3 {
          margin: 15px;
          color: #2c3e50;
          font-size: 24px;
        }

        .property-card p {
          margin: 0 15px 10px;
          color: #666;
        }

        .property-card h4 {
          margin: 0 15px 15px;
          color: #6a11cb;
          font-size: 22px;
        }

        .property-card button {
          width: calc(100% - 30px);
          margin: 0 15px 20px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .property-card button:hover {
          transform: scale(1.03);
        }
      `}</style>

      <div className="property-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>📍 {location}</p>
        <h4>{price}</h4>

        <Link to={`/property/${id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </>
  );
}

export default PropertyCard;