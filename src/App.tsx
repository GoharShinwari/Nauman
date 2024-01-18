import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import './index.css';

// this works but put it in a new reactjs project bc ghost compotent at the bottom making a white space
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
