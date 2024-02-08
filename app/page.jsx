import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import FourthSection from "./component/FourthSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import FifthSection from "./component/fifthSection";
import HeroSection from "./component/sections/hero-section/HeroSection";


export default function Home() {
  return (
  <>
  <HeroSection/>
  <Carousel/>
  <SecondSection/>
  <ThirdSection/>
  <FourthSection/>
  <FifthSection/>
  <Footer/>
  </>
  );
}
