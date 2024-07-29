import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




import Resume from './Resume';
import Skills from './Skills';
import PersonalDetails from './PersonalDetails';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App" >
        <header className="App-header">
          <div className='navbar'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-pink fixed-top">
              <Link to="/Home" className="multi-colored1"  >Home</Link>
              <Link to="/resume" className="multi-colored1"  >About</Link>
              <Link to="/skills" className="multi-colored1"   >Skills</Link>
              <Link to="/personalDetails" className="multi-colored1">Contact</Link>
              <div className="d-flex align-items-center" style={{ marginLeft: "auto" }}>
                
                <h2 className="multi-colored1">Neelophar</h2>&nbsp;&nbsp;
                <img src="/profile.jpg" alt="Profile" className="profile-photo" />&nbsp;&nbsp;
              </div>
            </nav>
          </div>

          
          
        </header>
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/personalDetails" element={<PersonalDetails />} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </Router>
   
    
  );
}

export default App;
