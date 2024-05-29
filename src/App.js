import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
// import Lubricants from "./components/Lubricants";

function App() {
  return (
    <div>
      <header className="header-bg-img d-flex flex-column ">
        <NavBar />
        <Hero />
      </header>
      {/* <Lubricants /> */}
    </div>
  );
}

export default App;
