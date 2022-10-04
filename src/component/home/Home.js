import Footer from "../footer/Footer";
import { Header } from "../header/Header";
import Navbar from "../navbar/Navbar";
import Package from "../packagess/Package";
import Services_entertainment from "../Services-entertainment/Services_entertainment";
import ContainSlider from "../slider/ContainSlider";
import ContainSlider2 from "../slider2/ContainSlider2";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Services_entertainment />
      <ContainSlider />
      <Package />
      <ContainSlider2 />
      <Footer />
    </div>
  );
}
export default Home;
