
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import homeimg from "../screens/home.jpeg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={homeimg}
        title="Your journey Your story"
        text=" Choose your favourite destination."
        buttonText="Travel plan"
        url="/"
       btnclass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  );
}
