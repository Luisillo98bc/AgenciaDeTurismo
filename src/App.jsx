import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Middle } from "./components/Middle/Middle";
import { Destinations } from "./components/Destinations/Destinations";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Reviews } from "./components/Reviews/Reviews";
import { Questions } from "./components/Questions/Questions";
import { Subscribe } from "./components/Subscribe/Subscribe";
import { Footer } from "./components/Footer/Footer";
import { Acordion } from "./components/Acordion/Acordion";
function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Reviews />
      <Questions />
      <Subscribe />
      
      <Footer />
      <Acordion />
    </div>
  );
}

export default App;
