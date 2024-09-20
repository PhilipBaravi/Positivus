import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import About from "./components/about/About";
import Services from "./components/services/Services";
import CaseStudies from "./components/case-studies/CaseStudies";
import WorkingProcess from "./components/working-process/WorkingProcess";
import Team from "./components/Team/Team";
import Testimonials from "./components/testimonials/Testimonials";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";
import Pricing from "./components/Pricing/Pricing";
import ScrollToTop from "./components/other-functions/ScrollToTop";
import ServicePageRoutes from "./components/services/ServicePageRoutes";
import Consultation from "./components/consultation-page/Consultation";

function HomePage() {
  return (
    <>
      <About />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
    </>
  );
}

function App() {
  return (
    <Router basename="/Positivus">
      <ScrollToTop /> {/* Scroll to top on route changes */}
      <div className="max-w-[1920px] mx-auto scrollbar-custom">
        <Nav />
        <Routes>
          {/* Home and other page routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* Spread service routes here */}
          {ServicePageRoutes()}
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
