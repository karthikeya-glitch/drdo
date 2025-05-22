// src/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
