import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage/UserPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:profile" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
