// src/App.tsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

import './index.css'; // Import the fonts.css file

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <TopBar />
      <LandingPage />
      <MainPage />
    </ChakraProvider>
  );
};

export default App;
