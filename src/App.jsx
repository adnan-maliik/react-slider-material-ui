import { Container,Box } from "@mui/material";
import SuitShowCase from "./components/SuitShowCase/SuitShowCase";
import BrandSlider from "./components/BrandSlider/BrandSlider";
import Cloud from "./components/Cloud";
import Faq from "./components/Faq/Faq";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import MobileShowCase from "./components/MobileShowCase/MobileShowCase";
import Navbar from "./components/Navbar";
import Simulation from "./components/Simulation/Simulation";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <KeyFeatures />
      <Testimonials />
      <Simulation />
      <Box py={7}>
        <Container>
          <Faq />
          <BrandSlider/>
        </Container>
      </Box>
      <Box  py={5}  sx={{backgroundColor:"darkColor",color:"#fff"}} >
          <Container>
              <MobileShowCase/>
          </Container>
          <Cloud/>
          <Container sx={{py:4}} >
              <SuitShowCase/>
              <Footer/>
          </Container>
      </Box>
      
    </>
  );
}

export default App;
