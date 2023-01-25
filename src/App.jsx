import Catagory from "./components/catagory";
import Landingmain from "./components/landingmain";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-brand-blue">
      <Navbar />
      <Landingmain />
      <Catagory />
    </div>
  );
}

export default App;
