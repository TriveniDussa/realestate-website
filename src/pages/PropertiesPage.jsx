import Navbar from "../components/Home/Navbar";
import Footer from "../components/Common/Footer";
import { Link } from "react-router-dom";

function PropertiesPage() {
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
      title: "Luxury Villa",
      location: "Hyderabad",
      price: "₹85 Lakhs",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600",
      title: "Modern Apartment",
      location: "Vijayawada",
      price: "₹55 Lakhs",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
      title: "Family House",
      location: "Guntur",
      price: "₹70 Lakhs",
    },
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "70px 8%",
          minHeight: "80vh",
          background: "linear-gradient(to right, #f8fafc, #eef2ff)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "48px",
            color: "#1e293b",
            fontWeight: "700",
          }}
        >
          Featured Properties
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "35px",
          }}
        >
          {properties.map((property) => (
            <div
              key={property.id}
              style={{
                width: "320px",
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={property.image}
                alt={property.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "22px" }}>
                <h2
                  style={{
                    color: "#1e293b",
                    marginBottom: "10px",
                  }}
                >
                  {property.title}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    marginBottom: "10px",
                  }}
                >
                   {property.location}
                </p>

                <h3
                  style={{
                    color: "#6a11cb",
                    marginBottom: "18px",
                  }}
                >
                  {property.price}
                </h3>

                <Link to={`/property/${property.id}`}>
                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "none",
                      borderRadius: "8px",
                      background:
                        "linear-gradient(135deg, #667eea, #764ba2)",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PropertiesPage;