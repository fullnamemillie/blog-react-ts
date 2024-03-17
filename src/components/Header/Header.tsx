import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { logOutUser } from '../../store/service/authSlice';
import { PiNotePencilBold } from 'react-icons/pi';
import { IoMdSettings } from 'react-icons/io';
import { SignUpResUser } from '../../interfaces/interfaces';

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const selectUser = (state: { auth: { user: SignUpResUser | null } }) =>
    state.auth.user;
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const upperCaseUsername =
    user && user.username
      ? user?.username.charAt(0).toUpperCase() + user?.username.slice(1)
      : '';

  const handleLogOut = () => {
    setIsLoggedIn(false);
    dispatch(logOutUser());
  };

  return (
    <header>
      <nav className="px-2 py-2">
        <Container>
          <div className="flex justify-between items-center">
            <Link to="/" className="font-titillium text-2xl text-blog-blue">
              Blog
            </Link>
            <ul className="flex items-center gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? 'text-black/80 py-navItem'
                      : 'text-black/30 py-navItem hover:text-black/60'
                  }
                >
                  Home
                </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink
                      to="/editor"
                      className="flex items-center text-black/30 py-navItem hover:text-black/60"
                    >
                      <PiNotePencilBold />
                      New Article
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/settings"
                      className="flex items-center text-black/30 py-navItem hover:text-black/60"
                    >
                      <IoMdSettings />
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/${user?.username}`}
                      className="flex items-center text-black/30 py-navItem hover:text-black/60 gap-username"
                    >
                      <img
                        src={user?.image}
                        alt="user-avatar"
                        className="w-3.5 h-3.5 rounded-username leading-none"
                      />
                      {upperCaseUsername}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogOut}
                      to="/"
                      className="text-black/30 py-navItem hover:text-black/60"
                    >
                      Sign Out
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive
                          ? 'text-black/80 py-navItem'
                          : 'text-black/30 py-navItem hover:text-black/60'
                      }
                    >
                      Sign in
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive
                          ? 'text-black/80 py-navItem'
                          : 'text-black/30 py-navItem hover:text-black/60'
                      }
                    >
                      Sign up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
