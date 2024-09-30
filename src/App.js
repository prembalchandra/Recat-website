
import './App.css';
import Header from './Compoenents/Common/Header';
import { Routes,Route, BrowserRouter, } from "react-router-dom";
import Home from './Compoenents/Peges/Home';
import About from './Compoenents/Peges/About';
import Services from './Compoenents/Peges/Services';
import Contact from './Compoenents/Peges/Contact';
import Footer from './Compoenents/Common/Footer';

function App() {
  return (
   <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/About" Component={About} /> 
            <Route path="/Services" Component={Services} /> 
            <Route path="/Contact" Component={Contact} /> 
        </Routes>
        <Footer/>
        </BrowserRouter>
      
   </>
  );
}

export default App;
