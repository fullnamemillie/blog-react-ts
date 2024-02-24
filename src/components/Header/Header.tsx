import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header>
      <nav className="px-2 py-3">
        <Container>
          <div className="flex justify-between items-center">
            <Link to="/" className="font-titillium text-2xl text-blog-blue">
              Blog
            </Link>
            <ul className="flex gap-4">
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
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
