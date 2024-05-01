import GallerySlider from "./components/GallerySlider";
import GridSection from "./components/GridSection";
import GridSectionThree from "./components/GridSectionThree";
import GridSectionTwo from "./components/GridSectionTwo";
import Header from "./components/Header";
import IPhone15 from "./components/IPhone15";
import IPhone15Pro from "./components/IPhone15Pro";
import SliderSection from "./components/SliderSection";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <IPhone15Pro />
      <IPhone15 />
      <GridSection />
      <GridSectionTwo />
      <GridSectionThree />
      <SliderSection />
      <GallerySlider />
      <Footer />
    </>
  );
}

export default App;
