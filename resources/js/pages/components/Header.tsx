import React from 'react';
import TopBar from './TopBar';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <TopBar />
      <Navigation />
    </header>
  );
};

export default Header;