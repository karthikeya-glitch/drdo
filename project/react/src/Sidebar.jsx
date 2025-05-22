// src/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', background: '#f5f5f5', padding: '20px', height: '100vh' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Bonus</Link></li>
          <li><Link to="/person">Add Person</Link></li>
          <li><Link to="/sanction">Sanction</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
