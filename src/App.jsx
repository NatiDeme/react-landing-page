import Catagory from "./components/catagory";
import Landingmain from "./components/landingmain";
import Navbar from "./components/navbar";
import FilterComponent from "./components/filter";
import CarouselLayout from "./components/carousel";
import LowerPart from "./components/lowerpart";

function App() {
  return (
    <div className="bg-brand-blue">
      <Navbar />
      <Landingmain />
      <FilterComponent />
      <Catagory />
      <CarouselLayout />
      <LowerPart />
    </div>
  );
}

export default App;
