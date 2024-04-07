
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from'./pages/Home';
import About from'./pages/About';
import Contact from'./pages/Contact';
import Login from'./pages/Login';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
