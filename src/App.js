// src/App.js
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
