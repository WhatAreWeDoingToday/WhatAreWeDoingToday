import React from 'react';
import Checkboxes from './Checkboxes';
import Header from './Header';
import '../styling/App.css';

const WelcomePage = () => {
  return (
    <div class = 'welcome'>
      <div class = 'select-card'>
        <Header />
        <Checkboxes />
      </div>
    </div>
  );
};

export default WelcomePage;
