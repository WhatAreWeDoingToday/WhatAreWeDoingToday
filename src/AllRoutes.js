import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Activity from './components/Activity';
import WelcomePage from './components/WelcomePage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  );
};

export default AllRoutes;
