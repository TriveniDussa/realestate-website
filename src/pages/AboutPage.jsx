import Navbar from "../components/Home/Navbar";
import Footer from "../components/Common/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          padding: "80px 10%",
          background: "linear-gradient(to right, #f8fafc, #eef2ff)",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            background: "#fff",
            padding: "50px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              color: "#1e293b",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            About Dream Homes
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.9",
              color: "#555",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Dream Homes is a trusted real estate platform dedicated to helping
            customers buy, sell, and rent properties with ease and confidence.
          </p>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.9",
              color: "#555",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Our mission is to connect families with quality homes at affordable
            prices while providing a seamless and transparent property search
            experience.
          </p>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.9",
              color: "#555",
              textAlign: "center",
            }}
          >
            With years of experience in the real estate industry, we have
            successfully helped hundreds of families find their dream homes and
            make informed property investments.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              marginTop: "50px",
              gap: "20px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "20px",
              }}
            >
              <h2 style={{ color: "#6a11cb", fontSize: "40px" }}>500+</h2>
              <p>Properties Listed</p>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "20px",
              }}
            >
              <h2 style={{ color: "#6a11cb", fontSize: "40px" }}>300+</h2>
              <p>Happy Clients</p>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "20px",
              }}
            >
              <h2 style={{ color: "#6a11cb", fontSize: "40px" }}>10+</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;