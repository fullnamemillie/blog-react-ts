import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MainPage from './pages/MainPage/MainPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:profile" element={<ProfilePage />} />
        <Route path="/:profile/favorites" element={<ProfilePage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
