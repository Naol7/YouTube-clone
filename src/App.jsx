import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './Components/Navbar/Navbar';
import Video from './Pages/Video/Video';
import Home from './Pages/Home/Home';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return ( 
    <Router> {/* Wrap the components with Router */}
      <div>
        <Navbar setSidebar={setSidebar}/>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar} />}/>
          <Route path='/video/:categoryId/:videoId' element={<Video />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
