import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 
                  isActive ? 'nav-link active navbar setActiveBg' : 'nav-link navbar'
                }
                aria-current="page"
                to="/like"
              >
                LikeButton
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 
                  isActive ? 'nav-link active navbar setActiveBg' : 'nav-link navbar'
                }
                to="/form"
              >
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 
                  isActive ? 'nav-link active navbar setActiveBg' : 'nav-link navbar'
                }
                to="/commentform"
              >
                CommentForm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 
                  isActive ? 'nav-link active navbar setActiveBg' : 'nav-link navbar'
                }
                to="/useStateHooks"
              >
                useStateHooks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 
                  isActive ? 'nav-link active navbar setActiveBg' : 'nav-link navbar'
                }
                to="/useEffectHooks"
              >
               useEffectHooks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 
                  isActive ? 'nav-link active navbar setActiveBg' : 'nav-link navbar'
                }
                to="/LotteryGame"
              >
               LotteryGame
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
