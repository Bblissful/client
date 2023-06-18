import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Map from "./components/Map";
import "tailwindcss/tailwind.css";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
