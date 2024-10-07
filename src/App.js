import './App.scss';
import { Routes, Route,useLocation } from 'react-router-dom';
import { About } from './containers/About';
import { Home } from './containers/Home';
import Contact  from './containers/Contact';
import  Projects  from './containers/Projects';
import { Skills } from './containers/Skills';
import { Navbar } from './components/navbar'; // Make sure path and export match

function App() {
  const location = useLocation();
  console.log(location);
   const renderParticleJsInHomePage = location.pathname == "/";
  return (
    <div className="App">
      
      <Navbar />
      <div className='App__main-page-content'>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
