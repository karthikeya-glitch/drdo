
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bonus from './bonus/bonus';
import Sanction from './sanction/sanction';
import Persoon from './addperson/person';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bonus />} />
        <Route path="/sanction" element={<Sanction />} />
        <Route path="/addperson" element={<Persoon />} />
      </Routes>
    </Router>
  );
}

export default App;
