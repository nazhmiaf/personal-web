import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import SelectedWorks from "./components/SelectedWorks";
import Experience from "./components/Experience";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <SelectedWorks />
      <Experience />
      <Cta />
      <Footer />
    </>
  );
};

export default App;