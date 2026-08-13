import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import About from './pages/About';
import Temples from './pages/Temples';
import Cuisine from './pages/Cuisine';

// Temporary Home page composing your existing sections
// Move this to pages/Home.tsx later if you prefer
function Home() {
  return (
    <>
      <Hero />
      <Feature />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/cuisine" element={<Cuisine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;