import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* //specific activity route */}
    </Routes>
  );
};

export default AllRoutes;
