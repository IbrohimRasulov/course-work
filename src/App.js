import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
  const [formData, setFormData] = useState({
    ism: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData((prevData) => {
      const { name, value } = event.target;
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/form"
              element={<Form formData={formData} handleChange={handleChange} />}
            />
            <Route path="/welcome" element={<Welcome formData={formData} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
