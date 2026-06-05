import PropertyCard from "./PropertyCard";
import "./Property.css";

function PropertyList() {

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: "Luxury Villa",
      location: "Hyderabad",
      price: "₹85 Lakhs"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      title: "Modern Apartment",
      location: "Vijayawada",
      price: "₹55 Lakhs"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      title: "Family House",
      location: "Guntur",
      price: "₹70 Lakhs"
    }
  ];

  return (
    <section className="properties">
      <h2>Featured Properties</h2>

      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  );
}

export default PropertyList;