import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import ContactFloatingButtons from "./components/ContactFloatingButton";
import './i18.js';

const Layout = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isContactPage && <Footer />}
      <ContactFloatingButtons />
    </div>
  );
};

// App root với Router
const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
