
import "./style.css";
import Hero from "./HeroSection";
import ServiceSection from "./ServiceSection";
import Footer from "./FooterSection";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Freemote React is Here!</h1> */}
      <Hero />
      <ServiceSection />
      <Footer />

    </div>
  );
}
