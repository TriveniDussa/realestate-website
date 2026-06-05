// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";


import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import PropertiesPage from "./pages/PropertiesPage";
import AboutPage from "./pages/AboutPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/" element={<LoginPage />} />

        <Route
          path="/register"
          element={<RegisterPage />}
        /> */}

        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/property/:id"
          element={<PropertyDetailsPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;