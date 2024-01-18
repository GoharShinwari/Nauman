import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import './index.css';

const App = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleButtonClick = () => {
    setShowMainPage(true);
  };

  const handleButtonClick2 = () => {
    setShowMainPage(false);
  };

  return (
    <ChakraProvider>
      <TopBar />
      {showMainPage ? (
        <MainPage onButtonClick={handleButtonClick2} />
      ) : (
        <LandingPage onButtonClick={handleButtonClick} />
      )}
    </ChakraProvider>
  );
};

export default App;
