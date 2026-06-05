import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonials";
import PropertyList from "../components/Property/PropertyList";
import Footer from "../components/Common/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <PropertyList />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;