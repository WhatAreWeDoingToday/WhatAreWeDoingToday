import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      {/* //specific activity route */}
    </Routes>
  );
};

export default AllRoutes;
