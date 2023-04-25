import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import NavBar from './components/NavBar';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <div className="App">
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
