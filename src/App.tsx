import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MainPage from './pages/MainPage/MainPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:profile" element={<ProfilePage />} />
        <Route path="/:profile/favorites" element={<ProfilePage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route
          path="/register"
          element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/login"
          element={<SignInPage setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;
