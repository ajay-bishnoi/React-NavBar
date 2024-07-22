import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CenterSlider from "./components/CenterSlider";
import LoginForm from "./components/LoginForm";
import Mail from "./components/Mail";
import GetPhoto from "./components/GetPhoto";
import { Routes, Route } from "react-router-dom";
import ApiPhotos from "./components/ApiPhotos";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <header className="header-bg-img d-flex flex-column ">
        <NavBar />
        <Hero />
      </header>
      <LoginForm />
      <Mail />
      <CenterSlider />
      <ProductList />
      <Routes>
        <Route path="/" element={<ApiPhotos />} />
        <Route path="/photo" element={<GetPhoto />} />
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
