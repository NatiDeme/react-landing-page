import Catagory from "./components/catagory";
import Landingmain from "./components/landingmain";
import Navbar from "./components/navbar";
import FilterComponent from "./components/filter";

function App() {
  return (
    <div className="bg-brand-blue">
      <Navbar />
      <Landingmain />
      <FilterComponent />
      <Catagory />
    </div>
  );
}

export default App;
