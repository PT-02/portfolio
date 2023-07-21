import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router,  Route ,Routes} from 'react-router-dom';
import LandingPage from './pages/landing_Page';
import AboutPage from './pages/about_page';
import ProjectPage from './pages/project';
import Email from './pages/email';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
      <Route path='/' element={<LandingPage />} />
        <Route path='/about_page' element={<AboutPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/email' element={<Email />} />
      </Routes>
    </Router>
  );
}

export default App;
